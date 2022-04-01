import { IonAvatar, IonButton, IonChip, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { camera, cameraOutline, createOutline, map, menuOutline, personCircle } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';


const Tab3: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader class='ion-no-boarder' mode='ios' >
        <IonToolbar class="ion-padding"  color='primary'>
          <IonIcon icon={menuOutline} slot="start"></IonIcon>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
           <IonIcon icon={createOutline} slot="end"> </IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding"> 

        {/* iontabs start here */}
        {/* <IonTabs>
        <IonTabBar slot="top">
            <IonTabButton tab="speakers">
            <IonLabel>Chat</IonLabel>
          </IonTabButton>

          <IonTabButton tab="messages">
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
          </IonTabBar>
        </IonTabs> */}
      {/* ion tabs end here */}
        {/* chat list starts here */}
        
            <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>Jimmy</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>Troy</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>Janie</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>Trye</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>Ivan</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>John</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/images/zziwa.jpg" />
          </IonAvatar>
          <IonLabel>Peter</IonLabel>
        </IonItem>
    {/* chat list ends here */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
