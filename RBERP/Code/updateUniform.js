$.noConflict();

jQuery(":checkbox").live("click", function () {
    alert('hi');
    //$('#frmContent').contents().find("table").find("input, textarea, select").not("button, input[type='button'], input[type='submit']").uniform();
    jQuery.uniform.update(two);
});