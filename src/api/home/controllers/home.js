"use strict";

/**
 *  home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const getHome = (entity) => {
  return Object.freeze({
    title: entity.Title,
    subTitle: entity.Subtitle,
    background: entity.Background.url,
    leftCard: {
      description: entity.screenAreas.LeftCard.Description,
      background: entity.screenAreas.LeftCard.background.url,
      icon: entity.screenAreas.LeftCard.icon.url,
    },
    middleCard: {
      description: entity.screenAreas.MiddleCard.Description,
      background: entity.screenAreas.MiddleCard.background.url,
      icon: entity.screenAreas.MiddleCard.icon.url,
    },
    rightCard: {
      description: entity.screenAreas.RightCard.Description,
      background: entity.screenAreas.RightCard.background.url,
      icon: entity.screenAreas.RightCard.icon.url,
    },
  });
};

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    const entity = await strapi.entityService.findOne("api::home.home", 1, {
      ...query,
    });
    return getHome(entity);
  },
}));
