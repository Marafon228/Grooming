import './App.css';
import React from 'react';
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_f3mpjjq', 'template_2dnmy6k', e.target, 'uzZNLyQqoktjL6_VU')
      .then((result) => {
        console.log(result.text);
        alert("Сообщение отправлено успешно!");
      }, (error) => {
        console.log(error.text);
        alert("Ошибка при отправке сообщения.");
      });

  e.target.reset();
}
function App() {
  return (

      <div
            data-include-products="false" className="u-body u-xl-mode" data-lang="ru">
        <header className="u-clearfix u-header u-header" id="sec-b153">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <a href="#" className="u-image u-logo u-image-1">
                <img src="images/logogroom.png" className="u-logo-image u-logo-image-1" style={{ maxWidth: '150px', height: 'auto' }} />
              </a>
              <div className="u-contact-info" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="u-social-icons" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <a href="https://vk.com" target="_blank" className="u-icon u-icon-vk" style={{ color: '#333', fontSize: '1.5rem' }}>
                    <i className="fab fa-vk"></i>
                  </a>
                  <a href="https://telegram.org" target="_blank" className="u-icon u-icon-telegram" style={{ color: '#333', fontSize: '1.5rem' }}>
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" className="u-icon u-icon-whatsapp" style={{ color: '#333', fontSize: '1.5rem' }}>
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="tel:+1234567890" className="u-icon u-icon-mobile" style={{ color: '#333', fontSize: '1.5rem' }}>
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                  <a href="mailto:example@example.com" className="u-icon u-icon-email" style={{ color: '#333', fontSize: '1.5rem' }}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      <section className="u-clearfix u-palette-3-dark-3 u-section-1" id="sec-cffc">
        <div
            className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <div className="u-opacity u-opacity-75 u-shape u-shape-svg u-text-palette-3-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" >
              <use href="#svg-d8b7"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-d8b7">
              <path d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
	c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"></path>
            </svg>
          </div>
          <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 150">
              <use href="#svg-a8e1"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 150" x="0px" y="0px" id="svg-a8e1">
              <path d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"></path>
            </svg>
          </div>
          <div className="u-image u-image-circle u-image-contain u-image-1"  data-image-width="900"
               data-image-height="900"></div>
          <div className="u-container-style u-expanded-width-xs u-group u-radius-20 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-text u-text-1">Добро пожаловать в наш груминг салон!</h2>
              <p className="u-text u-text-2"> Мы рады предложить вашему питомцу профессиональный уход и заботу.
                Наши опытные специалисты обеспечат вашему любимцу комфортные процедуры, включающие стрижку, мытьё,
                расчесывание и другие услуги по уходу за шерстью. Мы используем только качественные и безопасные средства,
                чтобы ваш питомец выглядел и чувствовал себя прекрасно.
                </p><br/>
              <p>

                Приходите к нам, и мы позаботимся о красоте и здоровье вашего питомца с любовью и вниманием!</p>


            </div>
          </div>
        </div>
      </section>

      <section className="u-align-left-md u-align-left-sm u-align-left-xs u-clearfix u-palette-3-dark-3 u-section-3"
               id="sec-2685">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160">
              <use href="#svg-c433"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-c433">
              <path d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
	c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"></path>
            </svg>
          </div>
          <div className="u-opacity u-opacity-85 u-shape u-shape-svg u-text-palette-3-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 130" >
              <use href="#svg-eda9"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 130" x="0px" y="0px" id="svg-eda9">
              <path d="M52.6,11.4C12,28.8-29.7,90.3,29.4,124c19.1,10.9,43.7,6.6,57.2-10.7c0.4-0.5,0.8-1,1.1-1.5c17.8-24.6,32.6-4.1,48.4-8.5
	C180.4,91.2,168.9-38.5,52.6,11.4z"></path>
            </svg>
          </div>
          <div className="u-align-left u-container-style u-expanded-width-xs u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-text u-text-1">Руководство по уходу за домашними животными</h2>
              <p className="u-text u-text-2"> Регулярно посещайте ветеринара для профилактических осмотров и вакцинации,
                обеспечьте животному сбалансированное питание, подходящее для его вида и возраста, а также следите,
                чтобы у него всегда была свежая и чистая питьевая вода. Регулярно ухаживайте за шерстью, расчесывая и мою её по необходимости.
                Обеспечьте достаточную физическую активность и внимание, чтобы питомец был счастлив и здоров.</p>

            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-palette-3-base u-section-4" id="carousel_0a6f">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-size-24-xl u-size-29-lg u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                  <div
                      className="u-container-layout u-valign-top-lg u-valign-top-sm u-valign-top-xl u-container-layout-1">
                    <div className="u-shape u-shape-svg u-text-white u-shape-1">
                      <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 150" >
                        <use href="#svg-c915"></use>
                      </svg>
                      <svg className="u-svg-content" viewBox="0 0 160 150" x="0px" y="0px" id="svg-c915">
                        <path d="M121.1,18C110.7,1.5,89.8-4.6,72.6,3.7c-10.5,5-17.7,14.2-20.8,24.7C48.4,39.9,42.4,48,28.3,55.5
	c-50.6,26.9-27.3,99.4,22,84.7c14.3-4.2,29.7-1.4,43.2,5.1c13.3,6.5,29.3,6.4,43.2-1.8c21-12.5,29.3-40.1,18.8-62.7
	c-2.5-5.4-5.9-10.1-9.8-14c-9.4-9.3-16.4-21-18.8-34.2C125.9,27.6,124,22.6,121.1,18z"></path>
                      </svg>
                    </div>
                    <div className="u-image u-image-circle u-preserve-proportions u-image-1" alt=""
                         data-image-width="900" data-image-height="958"></div>
                  </div>
                </div>
                <div
                    className="u-align-left u-container-style u-layout-cell u-radius-20 u-shape-round u-size-31-lg u-size-36-xl u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h3 className="u-text u-text-1"> Мы предлагаем уход за вашими питомцами</h3>
                    <p className="u-custom-font u-font-pt-sans u-text u-text-default u-text-2">
                      В нашем груминг салоне мы предлагаем полный спектр услуг по уходу за вашим питомцем,
                      чтобы он всегда выглядел и чувствовал себя великолепно. Наши услуги включают профессиональную стрижку,
                      мытьё с использованием качественных и безопасных шампуней, расчесывание и удаление колтунов.
                      Мы также предлагаем уход за когтями, чистку ушей и глаз, а также специализированные спа-процедуры для максимального комфорта вашего питомца.
                      Наши опытные грумеры обеспечат вашему любимцу индивидуальный подход и заботу на самом высоком уровне. Позвольте нам позаботиться о красоте и здоровье вашего питомца!</p>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-palette-3-dark-3 u-section-5" id="carousel_fcd6">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-expanded-width-sm u-shape u-shape-svg u-text-palette-3-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 150" >
              <use href="#svg-1b21"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 150" x="0px" y="0px" id="svg-1b21">
              <path d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"></path>
            </svg>
          </div>
          <div className="u-expanded-width-sm u-shape u-shape-svg u-text-palette-4-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 120" >
              <use href="#svg-9d97"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 120" x="0px" y="0px" id="svg-9d97">
              <path d="M124.3,80.3c20.5-1.1,32-18.4,34.8-31.5c4.7-22.6-6.7-55.4-81.5-47.7c-124.8,12.7-75.1,145.7-16.9,114
	C99.9,93.7,86.4,82.3,124.3,80.3z"></path>
            </svg>
          </div>
          <div className="u-image u-image-circle u-preserve-proportions u-image-1" alt="" data-image-width="900"
               data-image-height="958"></div>
          <div className="u-align-left u-container-style u-group u-radius-30 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">

              <h2 className="u-text u-text-2"> Дадим советы по уходу за вашими питомцами </h2>

            </div>
          </div>
        </div>
      </section>
      <section className="u-align-left-md u-align-left-sm u-align-left-xs u-clearfix u-palette-3-dark-3 u-section-6"
               id="carousel_07f2">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-flip-horizontal u-shape u-shape-svg u-text-palette-4-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" >
              <use href="#svg-c433"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-c433">
              <path d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
	c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"></path>
            </svg>
          </div>
          <div className="u-flip-horizontal u-opacity u-opacity-85 u-shape u-shape-svg u-text-palette-3-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 130" >
              <use href="#svg-eda9"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 130" x="0px" y="0px" id="svg-eda9">
              <path d="M52.6,11.4C12,28.8-29.7,90.3,29.4,124c19.1,10.9,43.7,6.6,57.2-10.7c0.4-0.5,0.8-1,1.1-1.5c17.8-24.6,32.6-4.1,48.4-8.5
	C180.4,91.2,168.9-38.5,52.6,11.4z"></path>
            </svg>
          </div>
          <div className="u-align-right u-container-style u-expanded-width-xs u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-text u-text-1"> Почему Важно Водить Животных в Груминг Салон</h2>
              <p className="u-text u-text-2"> Регулярный визит в груминг салон важен для поддержания здоровья и комфорта вашего питомца.
                Профессиональные грумеры обеспечат качественный уход за шерстью, что помогает предотвратить образование колтунов и снижает риск кожных заболеваний.
                Стрижка когтей и чистка ушей проводятся с особой осторожностью, что помогает избежать инфекций и проблем с лапами. Дополнительные процедуры,
                такие как спа и массажа, улучшают общее самочувствие вашего любимца, уменьшают стресс и делают его более счастливым.
                Посещение груминг салона также помогает своевременно выявить любые проблемы со здоровьем и принять необходимые меры.
                 Ваш питомец заслуживает только лучшего ухода, который может предоставить профессиональный груминг салон!</p>

            </div>
          </div>
        </div>
      </section>
      <section
          className="u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-palette-3-dark-3 u-section-7"
          id="carousel_3fb2">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 140" >
              <use href="#svg-a771"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 140" x="0px" y="0px" id="svg-a771">
              <g>
                <g>
                  <path d="M138.9,102.2c-9.5,10.1-24.4,20.2-41.2,27.4C63.2,144.5,21,147.1,3.1,112.4c-9.9-19.1,6.5-28.8,11.8-45.7
			c5.3-16.9-11.4-32.3-5.1-49.9c1.8-4.9,4.9-9,8.9-11.9C24,1,30.8-0.8,37.8,0.3C43.6,1.2,49,3.5,54.3,5.7c8.8,3.7,17.4,7.1,26.3,9.8
			c15.7,4.7,31.3,3.7,47.1,7.2c8.5,1.9,16.7,5.6,22.6,11.8C170.3,55.7,155.8,84.1,138.9,102.2z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="u-opacity u-opacity-80 u-shape u-shape-svg u-text-palette-3-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" >
              <use href="#svg-f7e0"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-f7e0">
              <path d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
	c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"></path>
            </svg>
          </div>
          <div className="u-image u-image-circle u-preserve-proportions u-image-1" data-image-width="900"
               data-image-height="900"></div>
          <div
              className="u-align-left u-container-style u-expanded-width-xs u-group u-radius-50 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-custom-font u-heading-font u-text u-text-1"> Почему мы ? </h2>
              <p className="u-text u-text-default u-text-2"> Наш сотрудник прошел отличную подготовку и обладают высокими профессиональными навыками в области груминга.
                Наши специалисты имеют богатый опыт и регулярно повышают свою квалификацию, чтобы обеспечить вашему питомцу лучший уход и заботу.</p>

            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-palette-3-base u-section-8" id="carousel_f2c2">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-size-28-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-align-left u-text u-text-1">Оставить заявку</h2>
                    <div className="u-expanded-width u-form u-form-1">
                      <form onSubmit={sendEmail} className="u-clearfix u-form-spacing-50 u-form-vertical u-inner-form" source="email" name="form">
                        <div className="u-form-group u-form-name u-label-none">
                          <label htmlFor="name-2ee9" className="u-label">Name</label>
                          <input type="text" placeholder="Ваше Имя" id="name-2ee9" name="name" className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required />
                        </div>
                        <div className="u-form-email u-form-group u-label-none">
                          <label htmlFor="email-2ee9" className="u-label">Email</label>
                          <input type="email" placeholder="Ваш электронный email адресс" id="email-2ee9" name="email" className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" />
                        </div>
                        <div className="u-form-tel u-form-group u-label-none">
                          <label htmlFor="tel-2ee9" className="u-label">Phone</label>
                          <InputMask mask="+7 (999) 999-99-99" placeholder="Ваш Телефон" id="tel-2ee9" name="tel" className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required />
                        </div>
                        <div className="u-form-group u-form-message u-label-none">
                          <label htmlFor="message-2ee9" className="u-label">Message</label>
                          <textarea placeholder="Ваше сообщение" rows="4" cols="50" id="message-2ee9" name="message" className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required></textarea>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit u-label-none">
                          <button type="submit" className="u-active-palette-3-light-2 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-light-2 u-radius-50 u-text-active-palette-3-dark-3 u-text-hover-palette-3-dark-3 u-white u-btn-1">Отправить</button>
                        </div>
                        <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                        <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                        <input type="hidden" name="formServices" value="52b130df-0859-4aeb-f319-4d596f8aba87" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-container-style u-grey-5 u-layout-cell u-size-30-xl u-size-32-lg u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                  <div className="u-container-layout u-valign-top u-container-layout-2">
                    <h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-2">Часто задаваемые вопросы</h2>
                    <div className="u-accordion u-expanded-width u-faq u-spacing-20 u-accordion-1">
                      <div className="u-accordion-item">
                        <a className="active u-accordion-link u-button-style u-text-active-palette-4-base u-text-body-color u-accordion-link-1" id="link-" aria-controls="" aria-selected="true">
                          <span className="u-accordion-link-text"> Как часто нужно грумировать собаку?</span><span className="u-accordion-link-icon u-file-icon u-icon u-icon-1"><img src="images/271210.png" alt=""/></span>
                        </a>
                        <div className="u-accordion-active u-accordion-pane u-container-style u-accordion-pane-1" aria-labelledby="link-">
                          <div className="u-container-layout u-container-layout-3">
                            <div className="fr-view u-clearfix u-rich-text u-text">
                              <p>Ответ: Частота груминга зависит от породы и типа шерсти вашей собаки. В среднем, собаку нужно грумировать каждые 4-6 недель.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-accordion-item">
                        <a className="u-accordion-link u-button-style u-text-active-palette-4-base u-text-body-color u-accordion-link-2" id="link-" aria-controls="" aria-selected="false">
                          <span className="u-accordion-link-text"> Какие услуги включает в себя груминг?</span><span className="u-accordion-link-icon u-file-icon u-icon u-icon-2"><img src="images/271210.png" alt=""/></span>
                        </a>
                        <div className="u-accordion-pane u-container-style u-accordion-pane-2" aria-labelledby="link-">
                          <div className="u-container-layout u-container-layout-4">
                            <div className="fr-view u-clearfix u-rich-text u-text">
                              <p>Ответ: Груминг обычно включает мытье, стрижку, чистку ушей, подрезку когтей и уход за зубами.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-accordion-item">
                        <a className="u-accordion-link u-button-style u-text-active-palette-4-base u-text-body-color u-accordion-link-3" id="link-" aria-controls="" aria-selected="false">
                          <span className="u-accordion-link-text"> Как подготовить собаку к визиту к грумеру?</span><span className="u-accordion-link-icon u-file-icon u-icon u-icon-3"><img src="images/271210.png" alt=""/></span>
                        </a>
                        <div className="u-accordion-pane u-container-style u-accordion-pane-3" aria-labelledby="link-">
                          <div className="u-container-layout u-container-layout-5">
                            <div className="u-clearfix u-rich-text u-text">
                              <p>Ответ: Перед визитом к грумеру рекомендуется выгулять собаку и дать ей возможность успокоиться. Не кормите собаку сразу перед визитом.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-accordion-item">
                        <a className="u-accordion-link u-button-style u-text-active-palette-4-base u-text-body-color u-accordion-link-3" id="link-" aria-controls="" aria-selected="false">
                          <span className="u-accordion-link-text"> Можно ли грумировать собаку в домашних условиях?</span><span className="u-accordion-link-icon u-file-icon u-icon u-icon-3"><img src="images/271210.png" alt=""/></span>
                        </a>
                        <div className="u-accordion-pane u-container-style u-accordion-pane-3" aria-labelledby="link-">
                          <div className="u-container-layout u-container-layout-3">
                            <div className="fr-view u-clearfix u-rich-text u-text">
                              <p>Ответ: Да, многие процедуры груминга можно проводить дома, однако для некоторых пород и сложных процедур лучше обратиться к профессионалу.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-accordion-item">
                        <a className="u-accordion-link u-button-style u-text-active-palette-4-base u-text-body-color u-accordion-link-3" id="link-" aria-controls="" aria-selected="false">
                          <span className="u-accordion-link-text"> Как выбрать подходящего грумера для моего питомца?</span><span className="u-accordion-link-icon u-file-icon u-icon u-icon-3"><img src="images/271210.png" alt=""/></span>
                        </a>
                        <div className="u-accordion-pane u-container-style u-accordion-pane-3" aria-labelledby="link-">
                          <div className="u-container-layout u-container-layout-3">
                            <div className="fr-view u-clearfix u-rich-text u-text">
                              <p>Ответ: Рекомендуется выбирать грумера по отзывам и рекомендациям, а также обратить внимание на условия работы и отношение к животным.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <footer className="u-footer" id="sec-footer">
          <div className="u-sheet u-sheet-1">
            <div className="footer-column">
              <a href="#" className="u-image u-logo u-image-1">
                <img src="images/logogroom.png" className="u-logo-image u-logo-image-1" alt="Company Logo" />
              </a>
            </div>
            <div className="footer-column">
              <h4>Контакты</h4>
              <p>Телефон: <a href="tel:+1234567890">+1 234 567 890</a></p>
              <p>Социальные сети:</p>
              <div className="u-social-icons">
                <a href="https://vk.com" target="_blank" className="u-icon u-icon-vk" style={{ color: '#333', fontSize: '1.5rem' }}>
                  <i className="fab fa-vk"></i>
                </a>
                <a href="https://telegram.org" target="_blank" className="u-icon u-icon-telegram" style={{ color: '#333', fontSize: '1.5rem' }}>
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" className="u-icon u-icon-whatsapp" style={{ color: '#333', fontSize: '1.5rem' }}>
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:example@example.com" className="u-icon u-icon-email" style={{ color: '#333', fontSize: '1.5rem' }}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Адрес</h4>
              <p>Суворов, Улица Калинина, дом 3 </p>
            </div>
          </div>
        </footer>

        <section className="u-backlink u-clearfix u-grey-80">
        <p className="u-text">
          <span>© 2024 Счастливый хвостик </span>

        </p>
      </section>

      </div>
  );
}

export default App;
