import { createSlice } from "@reduxjs/toolkit";

const priceMoney = ["1,000","2,000","3,000","5,000","10,000","20,000","40,000","80,000","1,60,000","3,20,000","6,40,000","12,50,000","25,00,000","50,00,000","75,00,000","1 CRORE","7.5 CRORE"];

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName:"",
        winStatement: true,
        userWinAmount:{
            count:1,
            winMoney:0,
            betMoney:'1,000'
        }
    },
    reducers:{
        addUserName: (state, action) => {
            state.userName = action.payload
        },
        addWinOrNotStatement: (state, action) => {
            state.winStatement = action.payload
        },
        addUserWinAmount(state){
            state.userWinAmount.winMoney = state.userWinAmount.betMoney;
            state.userWinAmount.betMoney = priceMoney[state.userWinAmount.count];
            state.userWinAmount.count = state.userWinAmount.count+1;
        }
    }
})

export default userSlice.reducer;
export const { addUserName , addWinOrNotStatement , addUserWinAmount } = userSlice.actions;