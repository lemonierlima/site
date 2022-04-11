import Image from "next/image";

export default function IndexPage(props) {
  return (  

      <Image
        layout='responsive'
        objectFit="cover"
        objectPosition="center"
        loading="eager"
        {...props} // help to spread oprate to use all props values
      />
  );
}