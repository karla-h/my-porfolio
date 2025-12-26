import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  icons: string[];
  links?: { url: string; icon: string; label?: string }[];
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel') carousel!: ElementRef;

  cards: Project[] = [

    {
      title: 'Sistema web integral de gestión hotelera | CHECA HOTEL & AIRBNB',
      description: 'Sistema web completo que automatiza reservas de habitaciones, gestión de tienda, inventarios y flujo de caja. Implementado con Laravel, Angular y MySQL, mejoró el control operativo en 40% y redujo errores administrativos en 35%.',
      imageUrl: 'images/projects/list_booking.PNG',
      icons: ['icons/laravel.svg', 'icons/angular.svg', 'icons/mysql.svg'],
      demoUrl: 'https://vibepoint.alkaana.com',
      links: [
      ]
    },
    {
      title: 'Sistema web de gestión de pedidos | Avícola DG',
      description: 'Plataforma web para gestión de pedidos de insumos, empaquetación, distribución y reportes de ventas. Optimizó la logística en 45%, mejoró el control de pedidos en 40% y aumentó la eficiencia comercial del negocio.',
      imageUrl: 'images/projects/pedidos.PNG',
      icons: ['icons/laravel.svg', 'icons/angular.svg', 'icons/mysql.svg'],
      demoUrl: 'https://pedidos.alkaana.com',
      links: [
      ]
    },
    {
      title: 'Sistema web de evaluación de créditos | Grupo Progresando',
      description: 'Sistema web con Laravel, Angular y MySQL para el proceso de aprobación de créditos. Incluye módulos de usuarios, solicitudes, evaluaciones y reportes. Redujo el tiempo de evaluación en 50% y los gastos operativos en 80%.',
      imageUrl: 'images/projects/credit_eval.PNG',
      icons: ['icons/laravel.svg', 'icons/angular.svg', 'icons/mysql.svg'],
      demoUrl: 'https://credieval.alkaana.com/',
      links: [
       
      ]
    },
    {
      title: 'Sistema web de gestión de planillas | Grupo Progresando Todos',
      description: 'Sistema desarrollado con Laravel, Angular y MySQL para automatizar planillas quincenales y generar reportes por sede, reduciendo tiempos de procesamiento y mejorando la gestión de desembolsos.',
      imageUrl: 'images/projects/planillas_admin.PNG',
      icons: ['icons/angular.svg', 'icons/laravel.svg', 'icons/mysql.svg'],
      demoUrl: '#',
      links: [
        { url: 'https://github.com/karla-h/sistema-planillas', icon: 'icons/github.svg' }
      ]
    },    
    {
      title: 'Sistema web de gestión de reservas | Hotel VanGogh ',
      description: 'Panel administrativo desarrollado con Spring Boot y Angular para optimizar la gestión de reservas. El proyecto permitió reducir el tiempo de registro de reservas y minimizar errores en la disponibilidad de habitaciones, mejorando la eficiencia operativa del hotel.',
      imageUrl: 'images/projects/ReservasHotel.jpg',
      icons: ['icons/angular.svg', 'icons/spring-boot.svg','icons/postgresql.svg'],
      links: [
        { url: 'https://github.com/karla-h/hotel-frontend', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Aplicación móvil de gestión de citas | Barbería Style',
      description: 'Aplicación móvil creada con Flutter que facilita la gestión de citas y servicios. Incluye un dashboard para analizar citas realizadas y servicios más solicitados, ayudando a optimizar procesos y mejorar la experiencia del cliente.',
      imageUrl: 'images/projects/BarberiaStyle.jpg',
      icons: ['icons/flutter.svg', 'icons/dart.svg','icons/firebase.svg'],
      links: [
        { url: 'https://github.com/karla-h/baberia', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Sistema de gestión de citas | Clínica San José',
      description: 'Sistema de escritorio diseñado para gestionar citas de pacientes. El sistema mejoró la organización en la atención médica y redujo significativamente el tiempo necesario para registrar citas, optimizando el flujo de trabajo.',
      imageUrl: 'images/projects/ClinicaSanJose.PNG',
      icons: ['icons/java.svg', 'icons/mysql.svg'],
      links: [
        { url: 'https://github.com/karla-h/clinica-san-jose', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Sistema punto de venta',
      description: 'Sistema web desarrollado con Laravel que facilita el control de las ventas y automatiza el control del inventario.',
      imageUrl: 'images/projects/PuntodeVenta.PNG',
      icons: ['icons/laravel.svg','icons/php.svg','icons/mysql.svg'],
      links: [
        { url: 'https://github.com/karla-h/punto-de-venta', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Business Intelligence | Transportes Virgen de la Puerta',
      description: 'Proyecto de análisis de datos utilizando Azure para el proceso ETL y Power BI para la visualización de datos. Los dashboards generados permitieron a la empresa identificar tendencias de demanda de pasajes y optimizar su toma de decisiones.',
      imageUrl: 'images/projects/DashboardTransportes.jpg',
      icons: ['icons/powerbi.svg', 'icons/azure.svg','icons/sqlserver.svg'],
      links: [
        { url: 'https://github.com/usuario/proyecto3', icon: 'icons/github.svg'}
      ]
    }
  ];

  ngOnInit() {
    this.cards = [...this.cards, ...this.cards];
  }

  ngAfterViewInit() {}

  scrollLeft() {
    const container = this.carousel.nativeElement;
    const cardWidth = 340;
    const totalWidth = container.scrollWidth;
    const oneSetWidth = totalWidth / 2;

    if (container.scrollLeft <= 10) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = oneSetWidth;
      container.style.scrollBehavior = 'smooth';
    }
    
    setTimeout(() => {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }, 50);
  }

  scrollRight() {
    const container = this.carousel.nativeElement;
    const cardWidth = 340;
    const totalWidth = container.scrollWidth;
    const oneSetWidth = totalWidth / 2;
    
    if (container.scrollLeft >= oneSetWidth - 10) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = container.scrollLeft - oneSetWidth;
      container.style.scrollBehavior = 'smooth';
    }

    setTimeout(() => {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }, 50);
  }
}