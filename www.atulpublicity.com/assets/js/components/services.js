const SERVICES = [
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>PRINT MEDIA</span> <br/> (Various Print Formats)",
    icon: "fa-solid fa-print",
    description:
      "Specializing in newspaper, magazine, flyer, brochure, and flex design for advertising.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>ELECTRONIC MEDIA</span> <br/> (TV Commercials)",
    icon: "fa-solid fa-tv",
    description:
      "Crafting impactful television advertisements to captivate audiences.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>RADIO MEDIA</span> <br/> (Radio Broadcasts)",
    icon: "fa-solid fa-radio",
    description:
      "Broadcasting compelling messages through radio channels for wide-reaching impact.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>DIGITAL MEDIA</span> <br/> (Social Platforms)",
    icon: "fa-solid fa-globe",
    description:
      "Leveraging social platforms to engage audiences through strategic digital campaigns.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>OUTDOOR MEDIA</span> <br/> (Hoarding & Mobile Ads)",
    icon: "fa-solid fa-panorama",
    description:
      "Utilizing hoardings, digital boards, and mobile vans for effective outdoor advertising.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>MULTIPLEX MEDIA</span> <br/> (Cinema Advertising)",
    icon: "fa-solid fa-users-rectangle",
    description:
      "Engaging cinema audiences with creative advertisements in multiplexes.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>PR SERVICES</span> <br/> (Public Relations)",
    icon: "fa-solid fa-users",
    description:
      "Managing public relations to enhance brand reputation and visibility.",
  },
  {
    title:
      "<span style='color:var(--secondary);font-size:16px;'>EVENTS PROMOTIONS</span>",
    icon: "fa-solid fa-calendar-days",
    description:
      "Planning and executing successful events to promote brands and products effectively",
  },
];

function servicesDesign() {
  const servicesContainer = document.getElementById("services-item");

  const serviceItemsHTML = SERVICES.map(
    (item) => `
  <div class="service-item cxu-fade" data-ease="back" style="background-color: #e2e2e23d;aspect-ratio:1/1;overflow-hidden;display: flex;align-items: center;">
  <div>
  <div class="icon">
    <i class="${item.icon}" style="font-size:30px;"></i>
  </div>
  <h3 class="title" style="font-size:15px;font-weight:400;line-height:25px">
    <a href="#" document
      >${item.title}
    </a>
  </h3>
  <p style="font-size:14px;color: var(--primary);">
    ${item.description}
  </p>
</div>
</div>`
  ).join("");

  servicesContainer.innerHTML = serviceItemsHTML;
}

servicesDesign();
