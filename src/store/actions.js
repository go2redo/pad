export const SET_PAD_MAP = '[APP] SET_ACTIVE_PAD';
export const SET_STEP = '[APP] STEP';

export const setActivePad = payload => ({ type: SET_PAD_MAP, payload });
export const setStep = payload => ({ type: SET_STEP, payload });
