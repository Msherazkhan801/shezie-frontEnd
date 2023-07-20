import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export default function ProductCard({data}) {
    return (
      <Card className="mt-6 w-[22rem]">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={data.image} alt="img-blur-shadow" layout="fill" className="w-[60%] h-auto ml-[70px]" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2 ml-[10px]">
           <span>Product Name:</span><span className="ml-3">{data.name}</span>
          </Typography>
          <Typography className="mb-2 ">
          price: ${data.total} 
          <span className="ml-9">Quantity:{data.qty}</span>
          </Typography>
        </CardBody>
        
      </Card>
    );
  }