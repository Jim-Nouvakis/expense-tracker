const apiUrl1 = 'https://mlngrws.euromednet.gr';
// const EltaDevApiUrl = 'https://eltadev.westeurope.cloudapp.azure.com'
// const EltaProdApiUrl = "https://api.expresspass.elta.gr"
const ELTA_URL = {
    DEV: "https://eltadev.westeurope.cloudapp.azure.com",
    PROD: "https://api.expresspass.elta.gr"
}
const DEV_ENV = "DEV"
const PROD_ENV = "PROD"
const ENV = PROD_ENV
const performBranchActionsAsItIsOpenDespiteBeingClosed = ENV === "DEV" ? true : false

const ENV_USED_API = ELTA_URL[ENV]
export default {ENV_USED_API, openDespiteBeingClosed: performBranchActionsAsItIsOpenDespiteBeingClosed, apiUrl1,};
