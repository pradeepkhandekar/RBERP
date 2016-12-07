// area surrounding the menu over which menu remains visible
var TCM_displayOffset = 10;

// constructor
function TCM_Menu(menu_id, startElement)
{
	// set attributes
	this.id = menu_id;
	this.menu = document.getElementById(this.id);
	this.menu.style.backgroundColor = "transparent";
	
	this.type = "tcm_menu";
	if (typeof this.menu == 'undefined' || this.menu == null) return;

	this.menu.object = this;
	this.startElement = document.getElementById(startElement);
	if (this.startElement == null || this.startElement.object == null) return null;

	this.tcmID = this.startElement.object.type.toLowerCase() == "tcm_startelement" ? this.startElement.object.tcmID : this.startElement.object.parentMenu.tcmID;

	this.items = new Array();
	this.align = this.startElement.object.type.toLowerCase() == "tcm_startelement" ? (eval("tcm_" + this.tcmID + "_AlignMode").toLowerCase() == "horizontal" ? "vertical" : "horizontal") : "horizontal";
	
	// create iframe
	this.iframe = isIE ? TCM_CreateMenuIframe(this) : null;
	
	// create underlay
	this.underlay = TCM_CreateMenuUnderlay(this);
	
	// set prototype functions
	this.ShowMenu = TCM_ShowMenu;
	this.HideMenu = TCM_HideMenu;	

	// the table container
	this.menuContainer = this.menu.firstChild;
	
	// set parent element
	this.parentElement = this.startElement;

	// set the submenu
	this.startElement.object.subMenu = this;
	// display the submenu cell
	TCM_CreateSubMenuCell (this.startElement.object);

	// add menu items to collection
	var items = this.menuContainer.getElementsByTagName("table");
	for (var i=0; i < items.length; i++ )
	{
		var item = new TCM_Item(this, items[i], "tcm_MenuItem");
		this.items.push(item);

		// set initial style
		TCM_SetStyle(item, false);
	}

	// attach onmouseover and onmouseout events
	eval("new heo_HoverEventObject(this.menu, " +
		"function (e) {TCM_MouseMoveProcess(e, true)}," +
		"function (e) {TCM_MouseMoveProcess(e, false)});");
	
	// attach onmouseover and onmouseout events
	eval("new heo_HoverEventObject(this.underlay, " +
		"function (e) {TCM_MouseMoveProcess(e, true)}," +
		"function (e) {TCM_MouseMoveProcess(e, false)});");

	// register the event
	if (document.layers)
		this.menu.captureEvents(Event.CLICK | Event.MOUSEOVER | Event.MOUSEOUT);
	// attach onclick event
	//this.menu.onclick = function (e) {TCM_MenuClickProcess(e);};
}

function TCM_MenuClickProcess (e) 
{
	if (!e) e = window.event;
	if (!e) return;
	
	var evSource = TCM_GetEventElements(e)[1];
	// try to get a menu item
	var targetItem = TCM_GetParentItemFromElement(evSource);

	// if there was no menu item clicked
	if (targetItem == null)
	{
		// try to get a menu
		var targetMenu = TCM_GetParentMenuFromElement(evSource);
		// if there is a menu and the menu's startElement has an onclick event
		if (targetMenu != null && typeof targetMenu.object.startElement.onclick == "function")
		{
			// compute scroll positions
			var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft
			var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
			if (isOpera) {scrollLeft /= 2;scrollTop /= 2;}

			// get mouse coords
			var mouseLeft = (e.clientX == -1 ? ob_em_getLeft(e.fromElement) - e.offsetX : e.clientX) + scrollLeft;
			var mouseTop = (e.clientY == -1 ? ob_em_getTop(e.fromElement) - e.offsetY : e.clientY) + scrollTop;
			
			// if mouse was over the parent item, call its on click
			if (mouseLeft >= targetMenu.object.startElement.object.coordLeft && mouseLeft <= targetMenu.object.startElement.object.coordRight &&
				mouseTop >= targetMenu.object.startElement.object.coordTop && mouseTop <= targetMenu.object.startElement.object.coordBottom)
				{
					targetMenu.object.startElement.onclick(e);
					// hide the menu
					targetMenu.object.HideMenu(true);
				}
		}
	}
}

function TCM_MouseMoveProcess(e, over)
{
	if (!e) e = window.event;
	if (!e) return false;

	var evElems = TCM_GetEventElements(e);
	
	var targetMenu = TCM_GetParentMenuFromElement(evElems[0]);
	var sourceMenu = TCM_GetParentMenuFromElement(evElems[1]);

	targetMenu = targetMenu != null ? targetMenu : TCM_GetUnderlayFromElement(evElems[0]);
	sourceMenu = sourceMenu != null ? sourceMenu : TCM_GetUnderlayFromElement(evElems[1]);

	if (!over)
	{
		if (typeof sourceMenu.menu != 'undefined' && typeof sourceMenu.menu.object == 'object' && typeof sourceMenu.menu.object.type != 'undefined' && sourceMenu.menu.object.type == 'tcm_menu')
			sourceMenu = sourceMenu.menu;

		if (targetMenu != null)
		{
			if (typeof targetMenu.menu != 'undefined' && typeof targetMenu.menu.object == 'object' && typeof targetMenu.menu.object.type != 'undefined' && targetMenu.menu.object.type == 'tcm_menu')
				targetMenu = targetMenu.menu;

			if (TCM_VisibleArrayElementHasPrecedence (sourceMenu, targetMenu))
				return;
			else if (TCM_VisibleArrayElementHasPrecedence (targetMenu, sourceMenu))
			{
				var menuIndex = TCM_VisibleArrayIndexOf (TCM_visibleMenus, sourceMenu);
				if (menuIndex > 0)
				{
					menuIndex -= menuIndex % 2;
					TCM_HideAllFromIndex(menuIndex + 1);
				}
				return;
			}
		}
		else
		{ 
			targetMenu = TCM_GetParentItemFromElement(evElems[0]);
			if (targetMenu != null && TCM_MenuIsSubmenuOfElement(sourceMenu, targetMenu)) 
				return;
		}
		
		TCM_HideAll();
	}
	
	return false;
}

function TCM_MenuIsSubmenuOfMenu(menu1, menu2)
{
	if (menu1 == null || typeof menu1 != 'object' || menu2 == null || typeof menu2 != 'object')
		return false;

	menu1 = typeof menu1.object == 'object' && menu1.object != null ? menu1.object : menu1;
	menu2 = typeof menu2.object == 'object' && menu2.object != null ? menu2.object : menu2;

	return (typeof menu1.startElement == 'object' && menu1.startElement != null 
			&& typeof menu1.startElement.object == 'object'
			&& typeof menu1.startElement.object.parentMenu == 'object'
			&& menu1.startElement.object.parentMenu == menu2);
}

function TCM_MenuIsSubmenuOfElement(menu, element)
{
	if (menu == null || typeof menu != 'object' || element == null || typeof element != 'object')
		return false;

	menu = typeof menu.object == 'object' && menu.object != null ? menu.object : menu;
	element = typeof element.object == 'object' && element.object != null ? element.object : element;

	return (typeof menu.startElement == 'object' 
			&& menu.startElement.object == element);
}

function TCM_ShowMenu()
{
	// read the coords of the parent element
	this.parentElement.object.GetItemCoords(true);

	// compute initial menuLeft and menuTop
	// set menu coords
	if (this.align == "horizontal")
		this.coordTop = this.parentElement.object.coordTop - 1;
	else
		this.coordTop = this.parentElement.object.coordBottom;

	if (eval("tcm_" + this.tcmID + "_RightToLeft"))
	{
		if (this.align == "horizontal")
			this.coordLeft = this.parentElement.object.coordLeft - this.menu.offsetWidth;
		else
			this.coordLeft = this.parentElement.object.coordRight - this.menu.offsetWidth;
	}
	else
	{
		if (this.align == "horizontal")
			this.coordLeft = this.parentElement.object.coordRight;
		else
			this.coordLeft = this.parentElement.object.coordLeft - 1;
	}

	// left, top, bottom, right
	var underlayOffsets = [TCM_displayOffset, TCM_displayOffset, TCM_displayOffset, TCM_displayOffset];

	if (eval("tcm_" + this.tcmID + "_AutoPosition"))
	{
		var windowWidth = 0;
		var windowHeight = 0;
		var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
		var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
		if (isOpera){scrollLeft /= 2;scrollTop /= 2;}

		// get all inner scrolls of elements up to body
		var cNode = this.menu;
		do
		{
			cNode = cNode.parentNode;
			if (cNode != null && cNode != document.body)
			{
				if (typeof(cNode.scrollLeft) != 'undefined') scrollLeft += cNode.scrollLeft;
				if (typeof(cNode.scrollTop) != 'undefined') scrollTop += cNode.scrollTop;
			}
			else break;
		}
		while (true);

		// compute the Window Width and Window Height
		if (typeof(window.innerWidth) == 'number')
		{
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
		}
		else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
		{
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		}
		else if (document.body && (document.body.clientWidth || document.body.clientHeight))
		{
			windowWidth = document.body.clientWidth;
			windowHeight = document.body.clientHeight;	
		}
		
		windowWidth += scrollLeft;
		windowHeight += scrollTop;

		if (eval("tcm_" + this.tcmID + "_RightToLeft"))
		{
			// if menu would be outside the document on the left but would fit on the right
			if (((this.align == "vertical" ? this.parentElement.object.coordRight : this.parentElement.object.coordLeft) - this.menu.offsetWidth) < scrollLeft && (this.coordLeft + this.menu.offsetWidth) < windowWidth)
				this.coordLeft = (this.align == "horizontal" ? this.parentElement.object.coordRight : this.parentElement.object.coordLeft) - 1;
		}
		else
		{
			// if menu would be outside the document on the right but would fit on the left
			if ((this.coordLeft + this.menu.offsetWidth) > windowWidth && (this.parentElement.object.coordLeft - this.menu.offsetWidth) > scrollLeft)
				this.coordLeft = (this.align == "vertical" ? this.parentElement.object.coordRight : this.parentElement.object.coordLeft) - this.menu.offsetWidth;
		}

		// if menu would be outside the document on the bottom but would fit on the top
		if ((this.coordTop + this.menu.offsetHeight) > windowHeight && (this.parentElement.object.coordTop - this.menu.offsetHeight) > scrollTop)
			this.coordTop = (this.align == "vertical" ? this.parentElement.object.coordTop : this.parentElement.object.coordBottom) - this.menu.offsetHeight + (this.parentElement.object.type.toLowerCase() == "tcm_menuitem" ? 1 : "");


		// adjust the offsets for right and bottom so underlay will not cause scroll (top and left don't cause scroll)
		underlayOffsets[2] = Math.max(0,Math.min(TCM_displayOffset, windowHeight - (this.coordTop + this.menu.offsetHeight) - 1));
		underlayOffsets[3] = Math.max(0,Math.min(TCM_displayOffset, windowWidth - (this.coordLeft + this.menu.offsetWidth) - 1));
	}
	
	// move menu to the coords
	this.menu.style.left = this.coordLeft + "px";
	this.menu.style.top = this.coordTop + "px";
	// display menu
	this.menu.style.visibility = "visible";
	
	this.coordRight = this.coordLeft + this.menu.offsetWidth;
	this.coordBottom = this.coordTop + this.menu.offsetHeight;
	
	// move underlay to the coords
	this.underlay.style.width = this.menu.offsetWidth + underlayOffsets[0] + underlayOffsets[3] + "px";
	this.underlay.style.height = this.menu.offsetHeight + underlayOffsets[1] + underlayOffsets[2] + "px";
	this.underlay.style.left = this.coordLeft - underlayOffsets[0] + "px";
	this.underlay.style.top = this.coordTop - underlayOffsets[1] + "px";
	
	// display the underlay
	this.underlay.style.visibility = "visible";
	
	if (this.iframe != null)
	{
		// move iframe to the coords
		this.iframe.style.width = this.menu.offsetWidth + "px";
		this.iframe.style.height = this.menu.offsetHeight + "px";
		this.iframe.style.left = this.coordLeft + "px";
		this.iframe.style.top = this.coordTop + "px";

		// display iframe
		this.iframe.style.visibility = "visible";
	}

	TCM_VisibleArrayPush (this.underlay);
	TCM_VisibleArrayPush (this.menu);
}

function TCM_HideMenu(closeParents)
{
	if (this.menu.style.visibility.toLowerCase() == "hidden") 
		return;
	
	// set menu coords
	this.coordLeft = -2000;
	this.coordTop = 0;
	this.coordRight = -2000;
	this.coordBottom = 0;
	
	// move menu to the coords and hide it
	this.menu.style.left = this.coordLeft + "px";
	this.menu.style.top = this.coordTop + "px";
	this.menu.style.visibility = "hidden";
	
	// move iframe to the coords and hide it
	if (this.iframe != null)
	{
		this.iframe.style.left = this.coordLeft + "px";
		this.iframe.style.top = this.coordTop + "px";
		this.iframe.style.visibility = "hidden";
	}

	// move underlay to the coords and hide it
	this.underlay.style.left = this.coordLeft + "px";
	this.underlay.style.top = this.coordTop + "px";
	this.underlay.style.visibility = "hidden";

	// unselect all menu items
	for (var i=0; i < this.items.length; i++)
		this.items[i].ItemHover(null, false, true);
		
	// if we have to close parents
	if (closeParents)
	{
		if (typeof this.startElement == 'object' && typeof this.startElement.object == 'object')
		{
			if (typeof this.startElement.object.parentMenu == 'object'
				&& this.startElement.object.parentMenu != null)
				this.startElement.object.parentMenu.HideMenu(true);
			else
				this.startElement.object.ItemHover(null, false, true);
		}
	}	
}

function TCM_Item(menu, item, type)
{
	// set attributes
	this.id = item.id;
	this.item = item;
	this.item.object = this;
	this.parentMenu = menu;
	this.MouseOver = false;
	// set type
	this.type = type;

	this.contentCell = item.firstChild.firstChild.firstChild;
	this.submenuCell = null;
	
	// set prototype methods
	this.ItemHover = TCM_ItemHover;
	this.ItemClicked = TCM_ItemClicked;
	this.GetItemCoords = TCM_GetItemCoords;

	// attach onmouseover and onmouseout events
	eval("new heo_HoverEventObject(this.item, " +
		"function (ev) {document.getElementById('" + this.id + "').object.ItemHover(ev, true);}," +
		"function (ev) {document.getElementById('" + this.id + "').object.ItemHover(ev, false);});");

	// capture events
	if (document.layers)
		this.item.captureEvents(Event.CLICK | Event.MOUSEOVER | Event.MOUSEOUT);

	// add an event to execute the link even if click was done on the item, but outside of link
	// and hide the menu
	eval("this.item.onclick = function (ev) {document.getElementById('" + this.id + "').object.ItemClicked(ev);}");
}

function TCM_StartElement(id, tcmID)
{
	var tmpEl = document.getElementById(id);
	if (tmpEl != null)
	{
		var elem = new TCM_Item(null, tmpEl, "tcm_StartElement");
		elem.tcmID = tcmID;

		// set initial style
		TCM_SetStyle(elem, false);
	}
}

function TCM_ItemClicked (e)
{
	if (this.contentCell.firstChild.nodeType == 1 && this.contentCell.firstChild.tagName.toLowerCase() == "a") 
	{
		if (!e) e = window.event;
		if (!e) return;
		
		// get the source element of the event
		var el = null;
		if (e.target) el = e.target;
		else if (e.srcElement) el = e.srcElement;
		
		if (el != null)
		{
			// if click was done on the link, do nothing
			if (el.nodeType == 1 && el.tagName.toLowerCase() == "a"){}
			// else, we clicked on the item that contains the link
			else
			{
				// if the link has a href
				if (this.contentCell.firstChild.href != null)
				{
					try
					{
						// if the link has a target
						if (typeof this.contentCell.firstChild.target != 'undefined' && this.contentCell.firstChild.target != null && this.contentCell.firstChild.target.length > 0)
						{
							// if target is self
							if (this.contentCell.firstChild.target.toLowerCase() == "_self")
								self.location.href = this.contentCell.firstChild.href;
							// if target is top window
							else if (this.contentCell.firstChild.target.toLowerCase() == "_top")
								top.location.href = this.contentCell.firstChild.href;
							// if target is parent window
							else if (this.contentCell.firstChild.target.toLowerCase() == "_parent")
								self.parent.location.href = this.contentCell.firstChild.href;
							// if target is blank window
							else if (this.contentCell.firstChild.target.toLowerCase() == "_blank")
								window.open(this.contentCell.firstChild.href, this.contentCell.firstChild.target);
							// if none of the above and top has frames
							else if (top.frames)
							{
								// if frame name was found, set the new href for it
								if (top.frames[this.contentCell.firstChild.target])
									top.frames[this.contentCell.firstChild.target].location.href = this.contentCell.firstChild.href;
								// else alert the user
								else
									window.alert("Frame '" + this.contentCell.firstChild.target + "' doesn't exist");
							}
							// if none of the above, open a new window with the name of the target
							else
								window.open(this.contentCell.firstChild.href, this.contentCell.firstChild.target);
						}
						// if no target, use the self as target
						else
							self.location.href = this.contentCell.firstChild.href;
					}
					catch (ex) {}
				}
			}
		}
	}
	
	// comment the following two lines if you don't want the menu to be hidden after clicking an item
	if (this.parentMenu != null) 
		this.parentMenu.HideMenu(true);
		
	return false;
}

function TCM_ItemHover(e, over, force)
{
	if (!e) e = window.event;
	if (!e && !force) return;

	// if over the item
	if (over)
	{
		if (this.MouseOver != over)
		{
			// change cells class names
			this.item.className = (this.type.toLowerCase() == "tcm_menuitem" ? "menuItemOver" : "parentMenuItemOver");
			TCM_SetStyle(this, true);

			if (this.type.toLowerCase() == "tcm_menuitem")
				// mark all other sibling items as unselected
				for (var i=0; i < this.parentMenu.items.length; i++)
					if (this.parentMenu.items[i] != this) 
						this.parentMenu.items[i].ItemHover(e, false, true);
			

			// if item has a submenu
			if (this.subMenu != null)
			{
				if (this.type.toLowerCase() == "tcm_menuitem")
				{
					var thisIndex = TCM_VisibleArrayIndexOf(TCM_visibleMenus, this.parentMenu.menu);
					if (thisIndex > 0) TCM_VisibleArrayRemoveFromIndex(thisIndex);
				}
				//else TCM_HideAll();
				
				TCM_VisibleArrayPush (this.type.toLowerCase() == "tcm_menuitem" ? this.parentMenu.menu : this.item);
				
				// show submenu
				this.subMenu.ShowMenu();
			}
		}
		this.MouseOver = over;
	}
	else
	{
		if (this.MouseOver != over)
		{
			// if not forced and item has a submenu
			if (!force && this.subMenu != null)
			{
				var mouseTo = TCM_GetEventElements(e)[0];
				var elementTo = TCM_GetParentMenuFromElement(mouseTo);
				elementTo = elementTo == null ? TCM_GetUnderlayFromElement(mouseTo) : elementTo;

				if (elementTo == null)
					TCM_HideAll();				
				else
				{
					if (typeof elementTo.menu != 'undefined' && typeof elementTo.menu.object == 'object' && typeof elementTo.menu.object.type != 'undefined' && elementTo.menu.object.type == 'tcm_menu')
						elementTo = elementTo.menu;

					if (this.type.toLowerCase() == "tcm_menuitem")
					{
						if (TCM_VisibleArrayElementHasPrecedence (this.parentMenu.menu, elementTo))
							return;
						else if (TCM_VisibleArrayElementHasPrecedence (elementTo, this.parentMenu.menu))
						{
							var menuIndex = TCM_VisibleArrayIndexOf (TCM_visibleMenus, this.parentMenu.menu);
							if (menuIndex > 0)
							{
								menuIndex -= menuIndex % 2;
								TCM_HideAllFromIndex(menuIndex + 1);
							}
						}
						else if (this.parentMenu.menu != elementTo)
						{
							elementTo = TCM_GetParentItemFromElement(mouseTo);
							if (elementTo == null || elementTo.object.parentMenu != this.parentMenu)
								TCM_HideAll();
						}
					}
					else 
					{
						if (TCM_MenuIsSubmenuOfElement(elementTo, this.item))
							return;
					}
				}
			}
			
			// change class names
			this.item.className = (this.type.toLowerCase() == "tcm_menuitem" ? "menuItem" : "parentMenuItem");
			TCM_SetStyle(this, false);
			
			// if has submenu
			if (this.subMenu != null) 
				// hide submenu
				this.subMenu.HideMenu();
		}
		this.MouseOver = over;
	}
}

function TCM_GetItemCoords(recalc)
{
	if (recalc || this.coordLeft == null) this.coordLeft = ob_em_getLeft(this.item);
	if (recalc || this.coordTop == null) this.coordTop = ob_em_getTop(this.item);
	if (recalc || this.coordRight == null) this.coordRight = this.coordLeft + this.item.offsetWidth;
	if (recalc || this.coordBottom == null) this.coordBottom = this.coordTop + this.item.offsetHeight;
}

// gets the absolute left position of the element
function ob_em_getLeft(obj)
{
	var pos = 0;
	
	if (!obj) return 0;

	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			pos += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}
	else if (obj.x) pos += obj.x;
	if (isSafari && obj != null && typeof obj.tagName != 'undefined' && obj.tagName.toLowerCase() == "body")
		pos += document.body.offsetLeft;
	return pos;
}

// gets the absolute top position of the element
function ob_em_getTop(obj)
{
	var pos = 0;

	if (!obj) return 0;
	if (obj.offsetParent) 
	{
		while (obj.offsetParent) 
		{
			pos += obj.offsetTop;
			obj = obj.offsetParent;
		}
	}
	else if (obj.y) pos += obj.y;
	if (isSafari && obj != null && typeof obj.tagName != 'undefined' && obj.tagName.toLowerCase() == "body")
		pos += document.body.offsetTop;
	return pos;
}

function TCM_CreateMenuIframe (menuObject)
{
	var iframe = document.createElement("IFRAME"); 
	iframe.src="javascript:false;"; 
	
	iframe.frameBorder = 1;
	iframe.style.position = "absolute"; 
	iframe.style.visibility = "hidden"; 
	iframe.style.left = "-2000px"; 
	iframe.style.top = "0px"; 
	iframe.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"; 
	iframe.style.filter = "Alpha(Opacity='0')";
	iframe.style.opacity = 0;
	iframe.style.MozOpacity = 0;

	return document.body.insertBefore(iframe, document.body.firstChild);
}

function TCM_CreateMenuUnderlay(menuObject)
{
	var div = document.createElement("DIV");
	
	div.id = menuObject.id + "_underlay";
	div.style.position = "absolute"; 
	div.style.zIndex = "100";
	div.style.visibility = "hidden";
	div.style.left = "-2000px"; 
	div.style.top = "0px"; 
	if (isOpera) div.style.backgroundColor = "transparent";
	else div.style.backgroundColor = "white";
	div.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"; 
	div.style.filter = "Alpha(Opacity='0')";
	try{div.style.opacity = 0;}catch(ex){};
	div.style.MozOpacity = 0;
	div.menu = menuObject.menu;

	if (menuObject.startElement.object.parentMenu != null)
		return menuObject.startElement.object.parentMenu.underlay.parentNode.insertBefore(div, menuObject.startElement.object.parentMenu.underlay);
	else
		return menuObject.startElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(div, menuObject.startElement.parentNode.parentNode.parentNode.parentNode.parentNode); 
}

function TCM_CreateSubMenuCell (itemObject)
{
	var tCell = document.createElement("td"); 
	tCell.id = "tcm_submenuCell";
	tCell.noWrap = true;
	tCell.unselectable = "on";

	// to define a minimum width of the submenu cell
	// useful when item content might get bigger than the defined menu width
	// and you want to use a background image instead of the default > sign
	/*
	var img = document.createElement("img");
	img.id = "tcm_subMenuWidthImage";
	img.src = eval("tcm_" + (itemObject.type.toLowerCase() == "tcm_startelement" ? itemObject.tcmID : itemObject.parentMenu.tcmID) + "_StyleFolder") + "dot.gif";
	img.border = 0;
	tCell.appendChild(img);
	*/

	tCell.appendChild(document.createTextNode(itemObject.type.toLowerCase() == "tcm_menuitem" ? 
			eval("tcm_" + (itemObject.type.toLowerCase() == "tcm_startelement" ? itemObject.tcmID : itemObject.parentMenu.tcmID) + "_SubMenuText") 
			: 
			""));
	
	itemObject.contentCell.parentNode.appendChild(tCell); 
	itemObject.submenuCell = tCell;
	itemObject.contentCell.colSpan = 1;

	// set initial style
	TCM_SetStyle(itemObject, false);
	
	return itemObject.submenuCell;
}

// the constructor for HoverEventObject
// element - element to which we attach the event (usually an element with child elements)
// onMouseOver - the function to call when mouse over 'element'
// onMouseOut - the function to call when mouse out of 'element'
function heo_HoverEventObject (element, onMouseOver, onMouseOut)
{
	// inner properties
	this.element = element;
	this.onMouseOver = onMouseOver;
	this.onMouseOut = onMouseOut;
	this.ProcessEvent = heo_ProcessEvent;
	element.hoverEventObject = this;

	// capture the events
	if (document.layers)
		this.menu.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT);	
	// attach the events to the element
	this.element.onmouseover = function (e) {return this.hoverEventObject.ProcessEvent(e, true)};
	this.element.onmouseout = function(e) { return this.hoverEventObject.ProcessEvent(e, false) };
//    this.element.addEventListener('mouseover', function(e) { return this.hoverEventObject.ProcessEvent(e, true); }, false);
//    this.element.addEventListener('mouseout', function(e) { return this.hoverEventObject.ProcessEvent(e, true); }, false);
}

// function that processes the event for 'element'
// e - event object
// over - if it's a mouseover or a mouseout event
function heo_ProcessEvent(e, over)
{
	if (!e) e = window.event;
	if (!e) return false;

	// get relative target
	var relTarg;
	if (typeof e.relatedTarget != 'undefined') relTarg = e.relatedTarget;
	else if (typeof e.fromElement != 'undefined' || typeof e.toElement != 'undefined') relTarg = over ? e.fromElement : e.toElement;
	// try to get to 'element' - if this is a child
	// if not found this will be null
	while (relTarg != null && relTarg != this.element)
		relTarg = relTarg.parentNode;

	// get current target
	var curTarg;
	if (typeof e.target != 'undefined') curTarg = e.target;
	else if (typeof e.srcElement != 'undefined') curTarg = e.srcElement;
	// try to get to 'element' - if this is a child
	// if not found this will be null
	while (curTarg != null && curTarg != this.element)
		curTarg = curTarg.parentNode;

	// if event took place between two children of 'element'
	// or between 'element' and a child
	// then discard the event
	if (relTarg == curTarg && curTarg != null)
	{
		e.returnValue = false;
		e.cancelBubble = true; 
		if (e.stopPropagation) e.stopPropagation();
		
		return false;
	}
	// else execute user functions for the event
	else
	{
		if (over)
			// if user passed a function for onmouseover event, execute it
			return (typeof this.onMouseOver == "function") ? this.onMouseOver(e) : true;
		else
			// if user passed a function for onmouseout event, execute it
			return (typeof this.onMouseOut == "function") ? this.onMouseOut (e) : true;
	}
}

function TCM_GetEventElements(e)
{
	if (!e) e = window.event;
	if (!e) return [null, null];

	// get relative target
	var relTarg;
	if (typeof e.relatedTarget != 'undefined') relTarg = e.relatedTarget;
	else if (typeof e.fromElement != 'undefined' || typeof e.toElement != 'undefined') relTarg = e.type.toLowerCase() == "mouseover" ? e.fromElement : e.toElement;
	
	// get current target
	var curTarg;
	if (typeof e.target != 'undefined') curTarg = e.target;
	else if (typeof e.srcElement != 'undefined') curTarg = e.srcElement;
		
	return [relTarg, curTarg];
}

function TCM_GetParentMenuFromElement(element)
{
	while (element != null && ((element.nodeType == 3 || typeof element.tagName == "undefined" || element.tagName.toLowerCase() != "div") || (typeof element.object != 'object' || (typeof element.object.type == 'undefined' || element.object.type.toLowerCase() != "tcm_menu"))))
		element = element.parentNode;
	return element;
}

function TCM_GetUnderlayFromElement(element)
{
	while (element != null && ((element.nodeType == 3 || typeof element.tagName == "undefined" || element.tagName.toLowerCase() != "div") || (typeof element.menu != 'object' || (typeof element.menu.object == 'undefined' || (typeof element.menu.object.type == 'undefined' || element.menu.object.type.toLowerCase() != "tcm_menu")))))
		element = element.parentNode;
	return element;
}

function TCM_GetParentItemFromElement(element)
{
	while (element != null && ((element.nodeType == 3 || typeof element.tagName == "undefined" || element.tagName.toLowerCase() != "table") || (typeof element.object != 'object' || (typeof element.object.type == 'undefined' || (element.object.type.toLowerCase() != "tcm_menuitem" && element.object.type.toLowerCase() != "tcm_startelement")))))
		element = element.parentNode;
	return element;
}

function TCM_GetElementIsParentOfElement(element, parent)
{
	while (element != null && element != parent)
		element = element.parentNode;
	return element != null;
}

function TCM_GetStyle(over, parentItem, menuID)
{
	tcm_menuCssStyles = eval("tcm_" + menuID + "_menuCssStyles");
	return (eval("tcm_" + menuID + "_RightToLeft") ? "direction: rtl;" + (parentItem ? "" : "text-align: right;") : "") + 
		(tcm_menuCssStyles[0] != "" && tcm_menuCssStyles[1] != "" ? 
			(("background-color:" + (over ? tcm_menuCssStyles[1] : tcm_menuCssStyles[0]) + ";") + 
			("color:" + (over ? tcm_menuCssStyles[0] : tcm_menuCssStyles[1]) + ";"))
			: ""
		) +
		(parentItem ?
			(
				(tcm_menuCssStyles[3] != "" ? "font:" + tcm_menuCssStyles[3] + ";" : "")
				+
				(eval("tcm_" + menuID + "_AlignMode").toLowerCase() == "horizontal" ? "" : "text-align: " + (eval("tcm_" + menuID + "_RightToLeft") ? "right" : "left") + ";")
			)
			:
			(tcm_menuCssStyles[2] != "" ? "font:" + tcm_menuCssStyles[2] + ";" : "")
		);
}

function TCM_SetStyle(itemObject, over)
{
	if (itemObject)
	{
		var styleString = TCM_GetStyle (over, itemObject.type.toLowerCase() == "tcm_startelement", itemObject.type.toLowerCase() == "tcm_startelement" ? itemObject.tcmID : itemObject.parentMenu.tcmID);
		
		TCM_SetStyleForElement(itemObject.contentCell, styleString);
		
		var cellLinkCollection = itemObject.contentCell.getElementsByTagName("a");
		for (var i=0; i < cellLinkCollection.length; i++)
			TCM_SetStyleForElement(cellLinkCollection[i], styleString);
		
		if (itemObject.submenuCell)
			TCM_SetStyleForElement(itemObject.submenuCell, styleString);
	}
}

function TCM_SetStyleForElement(element, styleString)
{
	// if cssText is supported
	if (typeof element.style.cssText != 'undefined')
		element.style.cssText = styleString;
	else 
	{
		try
		{
			// if style has also a setter
			element.style = styleString;
		}
		catch (ex)
		{
			try
			{
				// split the style string and set it using javascript
				var styles = styleString.split(';');
				for (var i=0; i < styles.length; i++)
				{
					if (TCM_Trim(styles[i]).length > 0)
					{
						var nameValue = TCM_Trim(styles[i]).split(':', 2);
						var indexOfDash = nameValue[0].indexOf('-')
						if (indexOfDash > 0) nameValue[0] = nameValue[0].substr(0, indexOfDash) + nameValue[0][indexOfDash+1].toUpperCase() + nameValue[0].substr(indexOfDash+2)
						eval("element.style." + TCM_Trim(nameValue[0]) + " = \"" + TCM_Trim(nameValue[1]).replace(/"/g, "'") + "\"");
					}
				}
			}
			catch (e) {}
		}
	}
}

var TCM_visibleMenus = new Array();
function TCM_Trim(sString) {if (typeof sString != "string") return "";while (sString.substr(0,1) == ' '){sString = sString.substr(1, sString.length);}while (sString.substr(sString.length-1, sString.length) == ' '){sString = sString.substr(0,sString.length-1);}return sString;}
function TCM_HideAll() {TCM_HideAllFromIndex(0)}
function TCM_HideAllFromIndex(index){if (index == 0 && TCM_visibleMenus.length > 0){TCM_visibleMenus[0].object.ItemHover(null, false, true);}else{for (var i=index; i < TCM_visibleMenus.length; i++){if (TCM_visibleMenus[i] != null && (typeof TCM_visibleMenus[i].object != 'undefined' && TCM_visibleMenus[i].object != null && typeof TCM_visibleMenus[i].object.HideMenu == "function")){TCM_visibleMenus[i].object.HideMenu();break;}}}TCM_VisibleArrayRemoveFromIndex(index);}
function TCM_VisibleArrayElementHasPrecedence(element1, element2){for (var i=0; i < TCM_visibleMenus.length; i++){if (element1 == TCM_visibleMenus[i]){for (var j=i; j<TCM_visibleMenus.length; j++)if (element2 == TCM_visibleMenus[j]) return true;break;}}return false;}
function TCM_VisibleArrayRemoveFromIndex(index){var tmpInclusions = new Array();for (var i=0; i < index; i++) {tmpInclusions[i] = TCM_visibleMenus[i];}TCM_visibleMenus = tmpInclusions;}
function TCM_VisibleArrayPush (value){TCM_visibleMenus.push(value);}
function TCM_VisibleArrayIndexOf (array, element){for (var i=0; i < array.length; i++){if (array[i] == element) return i;}return -1;}

if (document.layers){document.body.captureEvents(Event.CLICK | Event.MOUSEOVER | Event.MOUSEOUT);document.captureEvents(Event.CLICK | Event.MOUSEOVER | Event.MOUSEOUT);}

var agt=navigator.userAgent.toLowerCase();
var isNav = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
var isGecko = (agt.indexOf('gecko') != -1);
var isSafari = (agt.indexOf('safari') != -1);
var isIE = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var isAol = (agt.indexOf("aol") != -1);
var isOpera = (agt.indexOf("opera") != -1);
var isWebtv = (agt.indexOf("webtv") != -1); 
var isTVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1)); 
var isAOLTV = isTVNavigator;
var ishotjava = (agt.indexOf("hotjava") != -1);

var ob_tcm_js_version = "605";