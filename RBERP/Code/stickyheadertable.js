(function ($) {
    $.StickyTableHeaders = function (el) {
        setTimeout(function(){
            if($('.fixedtbldivClone').html()!=null){
                $('.fixedtbldivClone').remove();
            }
            var clonedTbl=document.createElement('div');
            clonedTbl.setAttribute('class','fixedtbldivClone');
            var tbl_ofset = $("#frmContent").contents().find('#secGrid').offset();
            $(el).find('th').each(function(){
                var ofset=$(this).offset();
                $(this).css({
                    'width':$(this).width()
                })
            })
            var tbody = $(el).find('tr:first').html();
            clonedTbl.innerHTML='<table cellspacing="0" cellpadding="0" border="0" >'+tbody+'</table>';
            $(clonedTbl).css({
                'position':'absolute',
                'z-index':100,
                'left':tbl_ofset.left,
                'top':tbl_ofset.top
            })
            document.body.appendChild(clonedTbl);
        },400)
    }
    $.fn.stickyTableHeaders = function (options) {
        return this.each(function () {
            (new $.StickyTableHeaders(this, options));
        });
    };
})(jQuery);