import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
declare var lightGallery: any;
declare var appear: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        var curPage = 1;
        var numOfPages = $(".skw-page").length;
        var animTime = 1000;
        var scrolling = false;
        var pgPrefix = ".skw-page-";

        function pagination() {
            scrolling = true;

            $(pgPrefix + curPage).removeClass("inactive").addClass("active");
            $(pgPrefix + (curPage - 1)).addClass("inactive");
            $(pgPrefix + (curPage + 1)).removeClass("active");

            setTimeout(function () {
                scrolling = false;
            }, animTime);
        };

        function navigateUp() {
            if (curPage === 1) return;
            curPage--;
            pagination();
        };

        function navigateDown() {
            if (curPage === numOfPages) return;
            curPage++;
            pagination();
        };

        $(document).on("mousewheel DOMMouseScroll", function (e) {
            if (scrolling) return;
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                navigateUp();
            } else {
                navigateDown();
            }
        });

        $(document).on("keydown", function (e) {
            if (scrolling) return;
            if (e.which === 38) {
                navigateUp();
            } else if (e.which === 40) {
                navigateDown();
            }
        });

        $('button').on('click', function () {
            $('body').toggleClass('open');
        });

        var $loop = $('.loop');
        if ($loop.length > 0) {
            $loop.owlCarousel({
                items: 3,
                center: true,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 2000,
                margin: 25,
                responsive: {
                    300: {
                        items: 3,
                        margin: 10
                    },
                    768: {
                        items: 3,
                        margin: 60
                    },

                }
            });
        }


      



        $('.owl-carousel-slider').owlCarousel({
            items: 2,
            loop: true,
            margin: 0,
            nav: false,
            autoplay: 2000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                }

            }
        });

        
        $(".owl-slider").owlCarousel({
            autoPlay: 3000, 
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
        $('ul#main-ibox li:nth-child(2)').addClass('active9');

        $('ul#main-ibox li').mouseover(function() {
        $('li.active9').removeClass('active9'), $('li:hover').addClass('active9');
        }).mouseout(function() {
        $('li.active9').removeClass('active9'), $('ul#main-ibox li:nth-child(2)').addClass('active9');
        });


        $(function () {
		
            var filterList = {
            
                init: function () {
                
                    // MixItUp plugin
                    // http://mixitup.io
                    $('#portfoliolist').mixItUp({
                        selectors: {
                        target: '.portfolio',
                        filter: '.filter'	
                    },
                    load: {
                      filter: '.app' // show app tab on first load
                    }     
                    });								
                
                }
        
            };
            
            // Run the show!
            filterList.init();
            
        });	
    }


}
