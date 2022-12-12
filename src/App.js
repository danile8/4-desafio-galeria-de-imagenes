
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header titulo="Galería de Imágenes con React"/>
      <Card src="https://toutelaculture.com/wp-content/uploads/2014/06/Chet-Faker-Built-On-Glass-1024x1024.jpg" titulo="Chet Faker" descripcion="Build on glass"/>
      <Card src="https://i.pinimg.com/originals/f1/cf/12/f1cf12d93b03c007cd50dd6bc2dd3afe.jpg" titulo="Metronomy" descripcion="The English Riviera"/>
      <Card src="http://www.noise11.com/wp/wp-content/uploads/2015/04/Tame-Impala-Currents.jpg" titulo="Tame Impala" descripcion="Currents"/>
      <Footer descripcion="Galería de imagenes de mis albunes favoritos"/>
    </div>
   
  );
}

export default App;
