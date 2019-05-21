export const addStuffINeverWannaDoReducer = global => ({
  stuffINeverWannaDo: global.stuffINeverWannaDo.concat(global.stuff)
});

export const resetStuffINeverWannaDoReducer = () => ({
  stuffINeverWannaDo: []
});

export const resetStuffReducer = () => ({
  stuff: ""
});

