import { Server } from "miragejs";
import { populatePilotsWithPositions } from "./processData";

if (process.env.NODE_ENV === "development") {
  const data = require("./data.json");

  new Server({
    seeds({ db }) {
      db.loadData({
        pilots: populatePilotsWithPositions(data),
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/pilots/:id", (schema, request) => {
        try {
          const pilotId = request.params.id;

          return schema.db.pilots.findBy({ _id: pilotId });
        } catch (e) {
          console.error(e);

          throw e;
        }
      });

      this.get("/pilots/", (schema) => {
        return schema.db.pilots;
      });
    },
  });
}
