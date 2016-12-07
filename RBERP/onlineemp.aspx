<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="onlineemp.aspx.cs" Inherits="RBERP.onlineemp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<body>

    <script type="text/javascript">
        window.onload = function () {

            var mapOptions = {
                center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var infoWindow = new google.maps.InfoWindow();
            var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
            for (i = 0; i < markers.length; i++) {
                var data = markers[i]
                var myLatlng = new google.maps.LatLng(data.lat, data.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: data.title
                });
                (function (marker, data) {
                    google.maps.event.addListener(marker, "click", function (e) {
                        infoWindow.setContent(data.description);
                        infoWindow.open(map, marker);
                    });
                })(marker, data);
            }
        }
</script>
    <style>
        html, body, #map_canvas {
            height: 100%;
            margin: 0px;
            padding: 0px;
        }
    </style>

<body>
    <form runat="server" id="form1">
        <table>
            <tr>
                <td></td>
                <td>The map with markers
                </td>
            </tr>
        </table>
    </form>

    <div id="map_canvas"></div>

</body>
</html>
