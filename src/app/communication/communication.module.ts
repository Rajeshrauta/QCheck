import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './communication.component';
import { EmailActivityComponent } from './pages/email-activity/email-activity.component';
import { WhatsappChatComponent } from './pages/whatsapp-chat/whatsapp-chat.component';
import { ChatAreaComponent } from './sub-components/chat-area/chat-area.component';
import { ChatUsersComponent } from './sub-components/chat-users/chat-users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommunicationComponent,
    EmailActivityComponent,
    WhatsappChatComponent,
    ChatAreaComponent,
    ChatUsersComponent,
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    SimplebarAngularModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class CommunicationModule {}
