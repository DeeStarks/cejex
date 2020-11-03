$(function(){
    // sidebar display
    $(".navbar .nav_items .fa-bars").click(function(){
        $(".sidebar").css({"right": "0"})
    })
    $(".sidebar #close .fa-times, .sidebar .items a").click(function(){
        $(".sidebar").css({"right": "-100%"})
    })

    // navbar background color change on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    // Initialize and add the map
    function initMap() {
        // The location of Eastline Shopping Complex
        const eastline = { lat: 6.473556, lng: 3.586306 };
        // The map, centered at Eastline Shopping Complex
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: eastline,
        });
        // The marker, positioned Eastline Shopping Complex
        const marker = new google.maps.Marker({
            position: eastline,
            map: map,
        });
    }
    initMap()

    // Print page
    $("print").click(function(){
        window.print()
    })
})