"use strict";

/**
 *  home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

class Home {
  constructor(data) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  // getAll() {
  //   return Object.freeze({
  //     ...this.getHeader(),
  //     ...this.getSec1(),
  //     ...this.getSec2(),
  //     ...this.getSecAreas(),
  //     ...this.getFooter(),
  //   });
  // }
  getHome() {
    return Object.freeze({
      ...this.getSec1(),
      ...this.getSec2(),
      ...this.getSecAreas(),
      ...this.getFooter(),
    });
  }

  getHeader() {
    if (this.header) {
      const { menu, MenuAcordeon, Logo, TitleAcordeon } = this.header;
      return {
        logo: Logo.url,
        menu,
        TitleAcordeon,
        MenuAcordeon,
      };
    }
    return;
  }
  getSec1() {
    if (this.OpenedSection) {
      const { Span, Background } = this.OpenedSection;
      return {
        Title: Span,
        Background: Background.url,
      };
    }
    return;
  }
  getSec2() {
    if (this.MiddleSection) {
      const { Span } = this.MiddleSection;
      return {
        Span,
      };
    }
    return;
  }
  getSecAreas() {
    if (this.AreasSection) {
      const { Leftcard, MiddleCard, RightCard } = this.AreasSection;

      return {
        LeftCard: {
          title: Leftcard.Title,
          Description: Leftcard.Description,
          Background: Leftcard.Background.url,
          Icon: Leftcard.Icon.url,
        },
        MiddleCard: {
          title: MiddleCard.Title,
          Description: MiddleCard.Description,
          Background: MiddleCard.Background.url,
          Icon: MiddleCard.Icon.url,
        },
        RightCard: {
          title: RightCard.Title,
          Description: RightCard.Description,
          Background: RightCard.Background.url,
          Icon: RightCard.Icon.url,
        },
      };
    }
    return;
  }

  getFooter() {
    if (this.footer) {
      return {
        footer: this.footer,
      };
    }
    return;
  }
}

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async customAction(ctx) {
    const home = "Esta é a home";
    return {
      Header: home,
    };
  },
  async getHeader(ctx) {
    const { query } = ctx;
    const entity = await strapi.entityService.findMany("api::home.home", {
      ...query,
    });

    const objt = new Home(entity[0] || { Conteudo: [] });
    return { Home: objt.getHeader() };
  },
  async find(ctx) {
    const { query } = ctx;
    const entity = await strapi.entityService.findMany("api::home.home", {
      ...query,
    });

    const objt = new Home(entity[0] || { Conteudo: [] });
    return { Home: objt.getHome() };
  },
}));
