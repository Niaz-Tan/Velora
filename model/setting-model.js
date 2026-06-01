import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema(
  {
    siteName: String,

    logo: String,

    contact: {
      phone: String,
      email: String,
      address: String,
    },

    social: {
      facebook: String,
      instagram: String,
      whatsapp: String,
    },

    delivery: {
      insideBangladesh: Number,
      outsideBangladesh: Number,
      freeShippingAbove: Number,
    },

    store: {
      acceptOrders: {
        type: Boolean,
        default: true,
      },

      maintenanceMode: {
        type: Boolean,
        default: false,
      },

      currency: {
        type: String,
        default: "BDT",
      },
    },

    ui: {
      homepageFeaturedLimit: {
        type: Number,
        default: 8,
      },

      showReviews: {
        type: Boolean,
        default: true,
      },

      showStock: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Settings =
  mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
