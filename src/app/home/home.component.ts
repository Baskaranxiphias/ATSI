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

        var $loop = $('.loop')
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


        //$("a[rel^='prettyPhoto']").prettyPhoto();
        //$(".usp").owlCarousel({
        //    items:4,
        //    center: true,
        //    loop: true,
        //    nav: false,
        //    dots: false,
        //    autoplay: true,
        //    autoplayTimeout: 2000,
        //    margin: 0,
        //    responsive: {
        //        300: {
        //            items: 3,
        //            margin: 0
        //        },
        //        768: {
        //            items: 4,
        //            margin: 0
        //        },
        //        991: {
        //            items: 4
        //        },
        //        1200: {
        //            items: 5
        //        }
        //    }
        //});



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
        })

        lightGallery(document.getElementById('lightgallery'));
        $(".owl-slider").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });


        $('.video').click(function () { this.paused ? this.play() : this.pause(); });

        $('.cover_boxes ul li,.cover_boxes ul li .box a.thumb').hover(function () {
            var x = $(this).hasClass("act");

            if (x == true) {
                $(this).removeClass("act");
            } else {
                $(this).toggleClass("act");
            }
        });


    }


}
