'use strict';

// Element toggle function
const elementToggleFunc = (elem: Element): void => {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar: Element | null = document.querySelector("[data-sidebar]");
const sidebarBtn: Element | null = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn?.addEventListener("click", () => {
  if (sidebar) {
    elementToggleFunc(sidebar);
  }
});

// Testimonials variables
const testimonialsItem: NodeListOf<Element> = document.querySelectorAll("[data-testimonials-item]");
const modalContainer: Element | null = document.querySelector("[data-modal-container]");
const modalCloseBtn: Element | null = document.querySelector("[data-modal-close-btn]");
const overlay: Element | null = document.querySelector("[data-overlay]");

// Modal variables
const modalImg: HTMLImageElement | null = document.querySelector("[data-modal-img]");
const modalTitle: HTMLElement | null = document.querySelector("[data-modal-title]");
const modalText: HTMLElement | null = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = (): void => {
  modalContainer?.classList.toggle("active");
  overlay?.classList.toggle("active");
};

// Add click event to all modal items
testimonialsItem.forEach(item => {
  item.addEventListener("click", function() {
    if (modalImg && modalTitle && modalText) {
      const avatar = this.querySelector("[data-testimonials-avatar]") as HTMLImageElement;
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]")!.innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]")!.innerHTML;
    }
    testimonialsModalFunc();
  });
});

// Add click event to modal close button
modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
overlay?.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select: Element | null = document.querySelector("[data-select]");
const selectItems: NodeListOf<Element> = document.querySelectorAll("[data-select-item]");
const selectValue: HTMLElement | null = document.querySelector("[data-select-value]");
const filterBtn: NodeListOf<Element> = document.querySelectorAll("[data-filter-btn]");

select?.addEventListener("click", function() {
  elementToggleFunc(this);
});

// Add event in all select items
selectItems.forEach(item => {
  item.addEventListener("click", function() {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    if (select) {
      elementToggleFunc(select);
    }
    filterFunc(selectedValue);
  });
});

// Filter variables
const filterItems: NodeListOf<Element> = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue: string): void => {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.getAttribute("data-category")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Add event in all filter button items for large screen
let lastClickedBtn: Element | null = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function() {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    filterFunc(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Contact form variables
const form: HTMLFormElement | null = document.querySelector("[data-form]");
const formInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("[data-form-input]");
const formBtn: HTMLButtonElement | null = document.querySelector("[data-form-btn]");

// Add event to all form input fields
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form && formBtn) {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    }
  });
});

// Page navigation variables
const navigationLinks: NodeListOf<Element> = document.querySelectorAll("[data-nav-link]");
const pages: NodeListOf<Element> = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function() {
    pages.forEach((page, pageIndex) => {
      if (this.innerHTML.toLowerCase() === page.getAttribute("data-page")) {
        page.classList.add("active");
        navigationLinks[pageIndex].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
  });
});
