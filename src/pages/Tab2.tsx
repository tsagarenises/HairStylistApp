import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonPopover, IonRow, IonSearchbar, IonSlide, IonSlides, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { calendar, createOutline, locationOutline, menuOutline, personCircleOutline, personCircleSharp } from 'ionicons/icons';
import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { arrowDownCircle, image, location } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [popoverDate2, setPopoverDate2] = useState('');
  const formatDate = (value: string) => {
    return format(parseISO(value), 'MMM dd yyyy');
  };
  return (
    <IonPage>
      <IonHeader mode='ios'  class="ion-padding">
        <IonToolbar   color='primary'>
        <div className='editcss' slot='start'>Edit </div>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
          <IonIcon icon={createOutline} slot="end"> </IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        
        {/* list of made appointments */}

        <IonList >
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          <IonItem>
          <IonGrid>
                  <IonRow>
                  <IonCol ><a href=""><IonImg src={"/assets/images/zziwa.jpg"} /></a></IonCol>
                  <IonCol>
                    <IonList lines='none'> 
                      <IonItem ><IonText color='secondary'>Ziwa Hair</IonText><IonText color='success'><IonIcon icon={personCircleSharp}></IonIcon>Open</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Rate UGX</IonText><IonText color='danger'>45,000</IonText></IonItem>
                      <IonItem ><IonText color='primary'>Duration</IonText><IonText color='danger'>30min</IonText></IonItem>
                    </IonList>
                    </IonCol>
                  </IonRow>
              </IonGrid>
          </IonItem>
          
        </IonList>

      
                  
        {/* end of the apointment list */}


        {/* book appointment module */}
        <IonImg src={"/assets/images/massage.jpg"} />
        <IonGrid>
            <IonSlides> 
              <IonSlide>
                <IonRow>
                
                  <IonCol>Thank you for choosing <div className='details'><IonLabel>{"Positive emotions"}</IonLabel></div><div className='stylistlocation'><IonIcon icon={location} />Garden city</div><IonButton id="open-modal"><IonIcon icon={calendar} />   date and time</IonButton></IonCol>
                </IonRow>
              </IonSlide>
            </IonSlides>
            
        </IonGrid>

      
        <IonModal trigger="open-modal">
          <IonContent>
            <IonDatetime></IonDatetime>
          </IonContent>
        </IonModal>
        {/* end of the book module screen*/}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
