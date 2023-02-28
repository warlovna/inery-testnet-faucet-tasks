import { JsonRpc, JsSignatureProvider, Api } from "ineryjs/dist/index.js";
const url = "http://157.245.197.27:8888";
const json_rpc = new JsonRpc(url);
const private_key = "5KLBthkvdpjQVFoRP9rLd4FnTVxXnezvsStG1otbzX4wne73KjD";
const actor = "alter.serv1";
const account = "wardy";
const signature = new JsSignatureProvider([private_key]);
const api = new Api({
  rpc: json_rpc,
  signatureProvider: signature
});
export {
  api as a,
  account as b,
  actor as c
};
