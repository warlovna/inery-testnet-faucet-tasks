import { j as json } from "../../../../chunks/index.js";
import { a as api, b as account, c as actor } from "../../../../chunks/config.js";
const POST = async ({ request }) => {
  const { id, data } = await request.json();
  try {
    const tx = await api.transact(
      {
        actions: [
          {
            account,
            name: "update",
            authorization: [
              {
                actor,
                permission: "active"
              }
            ],
            data: {
              id,
              data
            }
          }
        ]
      },
      { broadcast: true, sign: true }
    );
    return json(tx);
  } catch (error) {
    return json(error);
  }
};
export {
  POST
};
