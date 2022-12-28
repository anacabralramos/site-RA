"use strict";

/**
 *  header controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const getHeader = (entity) => {
  const menu = [];
  for (const key in entity.Menu) {
    menu.push(entity.Menu[key].TextOption);
  }

  const acordeon = [];
  for (const key in entity.Acordeon) {
    acordeon.push(entity.Acordeon[key].TextOption);
  }

  return Object.freeze({
    logo: entity.logo.url,
    menu,
    titleAcordeon: entity.TitleAcordeon,
    acordeon,
  });
};

module.exports = createCoreController("api::header.header", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    const entity = await strapi.entityService.findOne("api::header.header", 1, {
      ...query,
    });
    return getHeader(entity);
  },
}));
