class HelloController {
    allProductFind = (req,res) =>{
        res.status(200).json({
            status:"success",
            data : "All product found"
        });
    };
    productCreate = (req,res) =>{
        res.status(201).json({
            status:"success",
            data : "Product created successfully"
        })
    };
}

const helloController = new HelloController();

module.exports = helloController;