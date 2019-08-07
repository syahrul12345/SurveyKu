const text = await Contract.methods.getText().call({})

Contract.methods.changeText('New Text').send({
	from: accounts,
	gas: 470000,
	gasPrice:0

})

Contract.methods.pay().send({
	from: accounts,
	gas: 470000,
	value:1000000000000000000 // in WEI, which is equivalent to 1 ether
	gasPrice:0

})