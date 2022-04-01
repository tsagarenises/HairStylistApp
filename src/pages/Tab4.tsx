import { IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { cardOutline, cubeOutline, help, menuOutline, shareOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Manage Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        {/* content starts here */}
        <IonList >
          <IonItem lines='none'>
            <IonAvatar slot="start">
              <img src="/assets/images/zziwa.jpg" />
            </IonAvatar>
            <IonLabel><h3>Misaga Ivan</h3></IonLabel><div className='editprofile' slot='end'>Edit </div>
          </IonItem>
          <IonItem ></IonItem>
          <IonItem lines='none'><IonIcon icon={cubeOutline} slot="start"></IonIcon>Manage Booked Slots</IonItem>
          <IonItem lines='none'><IonIcon icon={cardOutline} slot="start"></IonIcon>Manage Payments</IonItem>
          <IonItem ></IonItem>
          <IonItem lines='none'><IonIcon icon={help} slot="start"></IonIcon>Help Center</IonItem>
          <IonItem lines='none'><IonIcon icon={shareOutline} slot="start"></IonIcon>Share with a friend</IonItem>

        </IonList>
      
         </IonContent>
    </IonPage>
  );
};

export default Tab4;
