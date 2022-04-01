import { IonAccordion, IonAccordionGroup, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonSlide, IonSlides, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { arrowDownCircle, image, location } from 'ionicons/icons';
import { useRef, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  
  return (
    <IonPage>
      <IonHeader mode='ios'>
        <IonToolbar color='primary'>
          <IonTitle>Choose TouchUp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        
        
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <div className='headingss'><div className='beststylist'>Best stylist</div><div className='viewall'>View all</div></div><blockquote/>
        <IonGrid>
        <IonSlides> 
          <IonSlide>
            <IonRow>
             <IonCol><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /><div className='salonloc'><IonLabel>{"Ziwa Hair"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Acacia Avenue</div></a></IonCol>
             <IonCol><a href=""><IonImg src={"/assets/images/mat-barber-giving-bebe-a-hair-cut.jpg"} /><div className='salonloc'><IonLabel>{"Mart Barber"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Kiseminti Rd</div></a></IonCol>
             <IonCol><a href=""><IonImg src={"/assets/images/Sparkles-Salon.jpg"} /><div className='salonloc'><IonLabel>{"Sparcles"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Arena mall</div></a></IonCol>
            </IonRow>
          </IonSlide>
          </IonSlides>
          </IonGrid>
          
          <div className='specialoffers'> Special offers</div><div className='viewall'>View all</div><blockquote/>
          <IonGrid>
          <IonSlides> 
            <IonSlide>
              <IonRow>
                <IonCol><a href=""><IonImg src={"/assets/images/ziwaservices.jpeg"} /><div className='salonloc'><IonLabel>{"Ziwa Hair"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Acacia Avenue</div></a></IonCol>
                <IonCol><a href=""><IonImg src={"/assets/images/flash-facials-holding.jpg"} /><div className='salonloc'><IonLabel>{"Mart Barber"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Kiseminti Rd</div></a></IonCol>
                <IonCol><a href=""><IonImg src={"/assets/images/nails.jpeg"} /><div className='salonloc'><IonLabel>{"Sparcles"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Arena mall</div></a></IonCol>
              </IonRow>
            </IonSlide>
          </IonSlides>
      </IonGrid>
      
      <div className='popularservices'> Popular services</div><div className='viewall'>View all</div><blockquote/>
          <IonGrid>
          <IonSlides> 
            <IonSlide>
              <IonRow>
                <IonCol><a href=""><IonImg src={"/assets/images/massage.jpg"} /><div className='salonloc'><IonLabel>{"Positive emotions"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Garden city</div></a></IonCol>
                <IonCol><a href=""><IonImg src={"/assets/images/short-hairstyles-for-black-women.jpg"} /><div className='salonloc'><IonLabel>{"Swisscut"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Lower Kololo</div></a></IonCol>
              </IonRow>
            </IonSlide>
          </IonSlides>
      </IonGrid>
          
       </IonContent>
    </IonPage>
  );
};

export default Tab1;
function logAccordionValue(): void {
  throw new Error('Function not implemented.');
}

function closeAccordion(): void {
  throw new Error('Function not implemented.');
}

