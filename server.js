const app = require('./src/config/custom-express');
const port = '3000';


app.listen(port,()=>{
	console.log(`Subi o servidor na porta ${port}`)
});