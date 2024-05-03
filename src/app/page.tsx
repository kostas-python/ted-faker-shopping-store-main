import Head from 'next/head'; 
import RootLayout from './layout';
import Navbar from './components/Navbar';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Footer from './components/Footer';
import Image1 from './components/Image1';
import Page1 from './components/Page1';
import Video from './components/Video';
import Block3 from './components/Block3';
import Block4 from './components/Block4';



export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <html className="h-full bg-white">
      <body className="h-full">
      <Navbar />
      
        
          <Video/> 
          <Image1/>
           <Page1 />
           
          <Block2 />
          
          <Block3 />
          <Block4 />
          <Block1 />
        
        <Footer />
      

      </body>
      </html>
    </RootLayout>
  );
}
