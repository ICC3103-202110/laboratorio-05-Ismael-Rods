
function update(input11,input22,model){
    const {billAmount,percentage,tip,total,input1,input2}= model
    const newTip = (Number(input11)*Number(input22)/100)
    const newTotal= newTip+Number(input11)
    return {
        ...model,
        billAmount: input11,
        percentage: input22,
        tip: newTip,
        total: newTotal,
        input1: input11,
        input2: input22
    }
}

module.exports = {
    update
}