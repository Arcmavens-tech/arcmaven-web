import { UserService } from './../core/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { NavbarComponent } from '../core/panels/navbar/navbar.component';
declare let dataLayer: Array<any>;

declare var $:any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public model = {
        left: true,
        middle: false,
        right: false
    };

    public banner :boolean = true;
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    public submitting:boolean = false;

    public contact = {
        name : '',
        email : '',
        dreamBrands : [],
        timestamp : (new Date()).getTime().toString()
    };

    public clients = [
        {
            icon:"work-2.jpg",
            name:"The Chai Cafe",
            desc:"Food & Beverage Industry"
        },
        {
            icon:"work-3.jpg",
            name:"Bikkr",
            desc:"India's only Premium Motorcycles Marketplace"
        },
        {
            icon:"work-4.jpg",
            name:"Crazy Bruno",
            desc:"Late Night Food Delivery Startup"
        },
        {
            icon:"work-5.jpg",
            name:"The Jet Set",
            desc:"Hyperlocal Marketplace for Airports"
        },
        {
            icon:"work-6.jpg",
            name:"Future Cadets",
            desc:"Online Prep Platform for CDS"
        },
        {
            icon:"work-7.jpg",
            name:"PrepMonk",
            desc:"Gamified Learning Platform"
        },
        {
            icon:"work-8.jpg",
            name:"MADS Apparels",
            desc:"Fitness Wear Brand"
        },
        {
            icon:"work-9.jpg",
            name:"Trendy Divva",
            desc:"Women Fashionwear Brand"
        },
        {
            icon:"work-10.png",
            name:"Aim & Achieve",
            desc:"Online Prep Platform for Bank PO"
        },
        {
            icon:"work-11.png",
            name:"Firangi Cafe",
            desc:"Food & Beverage Industry"
        },
        {
            icon:"work-12.png",
            name:"LeapWired",
            desc:"Online Consultation Platform for students"
        },
        // {
        //     icon:"work-9.jpg",
        //     name:"Trendy Divva",
        //     desc:"Women Fashionwear Brand"
        // }
        
    ]

    public services = [
        {
            icon:"dyb.png",
            name:"Digitizing Your Business",
            desc:"Arc Mavens brings your business online with its web and mobile app development services"
        },
        {
            icon:"ads.png",
            name:"Advertising",
            desc:"Our team helps you resonate your Brand to your audience"
        },
        {
            icon:"uiux.png",
            name:"Digital Product Design",
            desc:"Our UI/UX design process based on latest industry trends results in beautiful websites and apps."
        },
        {
            icon:"idea.png",
            name:"Idea Launch",
            desc:"You have an idea? Building the right product for it is the hard part. We do it for you."
        },
        {
            icon:"brand.png",
            name:"Brand Management",
            desc:"We help you create an everlasting Brand by identifying and understanding your Market"
        },
        {
            icon:"digital.png",
            name:"Digital Marketing",
            desc:"A data centric approach to utilise online channels like FB, Instagram, Quora, LinkedIn, Youtube, Google etc "
        },
        {
            icon:"content.png",
            name:"Creating Media Driven Content",
            desc:"Arc Mavens heps you create great content for different media channels"
        },
        {
            icon:"pm.png",
            name:"Product Management",
            desc:"Want to achieve maximum out of your digital products? We can help you optimise your product to meet business goals."
        }
        
    ]

    public brands = [
        {
            image:"hd.png",
            selected: false,
            name: "Harley Davidson"
        },
        {
            image:"bmw.png",
            selected: false,
            name: "BMW"
        },
        {
            image:"dskb.png",
            selected: false,
            name: "Benelli"
        },
        {
            image:"im.png",
            selected: false,
            name: "Indian Motorcycle"
        },
        {
            image:"ktm.png",
            selected: false,
            name: "KTM"
        },
        {
            image:"re.png",
            selected: false,
            name: "Royal Enfield"
        },
        {
            image:"t.png",
            selected: false,
            name: "Triumph"
        },
        {
            image:"ducati.png",
            selected: false,
            name: "Ducati"
        },
        {
            image:"ap.png",
            selected: false,
            name: "Aprilla"
        },
        {
            image:"kw.png",
            selected: false,
            name: "Kawasaki"
        }
    ];

    constructor(private renderer : Renderer, private userService: UserService,
        private router: Router, private element : ElementRef) 
     {
       var tag = document.createElement('script');
       
             tag.src = "https://www.youtube.com/iframe_api";
             var firstScriptTag = document.getElementsByTagName('script')[0];
             firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
     }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.parentNode.children[0].children[0];
        navbar.classList.add('navbar-transparent');
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
    }
    
    addSubscriber() {
        this.submitting = true;
        this.contact.dreamBrands = this.brands.filter(brand=>{
            return brand.selected;
        }).map(a => a.name);
        this.userService.addContact(this.contact).subscribe(res=>{
            this.reset();
            if(res == 'added'){
                dataLayer.push({'event': 'Register'});
            }
        }, err=>{
            this.reset();    
        }, ()=>{
            this.reset();
        });
    }

    reset(){
        this.contact = {
            name : '',
            email : '',
            dreamBrands : [],
            timestamp : (new Date()).getTime().toString()
        };
        this.brands.forEach(brand =>{
            brand.selected = false;
        }); 
        this.submitting = false;
    }

    isMobile(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    showVideo(){
        this.addVideoClickEvent();
        let overlayContainer = document.getElementById('overlayGrid');
        overlayContainer.classList.remove("hidden");
    }

    removePlayer(){
        let overlayContainer = document.getElementById('overlayGrid');
        overlayContainer.classList.add("hidden");
    }
    
    addVideoClickEvent(){
        dataLayer.push({'event': 'Video Played'});
    }
}
