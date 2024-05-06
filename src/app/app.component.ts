import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  searchInput: string = ''; // Variable to track the input value
  isInputEmpty: boolean = true;
  holeData={
    "top_analytics_cards": {
        "all_time": 4.345,
        "send_emails": 3.487,
        "open_rate": 2.98,
        "click_rate": 1.098
    },
    "activation_steps": [
        {
            "step_title": "Install the tool",
            "icon": "fas fa-1",
            "description": "Follow the instruction to install.",
            "datetime": "2024-04-15T00:54:00Z"
        },
        {
            "step_title": "Setup an account",
            "icon": "fas fa-2",
            "description": "Create a new account.",
            "datetime": "2024-04-15T03:30:00Z"
        },
        {
            "step_title": "Add customers",
            "icon": "fas fa-3",
            "description": "Add new customers with email address.",
            "datetime": "2024-04-15T08:00:10Z"
        },
        {
            "step_title": "Prepare an email list",
            "icon": "fas fa-4",
            "description": "Create groups with customers.",
            "datetime": "2024-04-15T11:25:10Z"
        },
        {
            "step_title": "Create an email campaigns",
            "icon": "fas fa-5",
            "description": "Prepare an email template.",
            "datetime": "2024-04-15T013:45:10Z"
        },
        {
            "step_title": "Assign group list",
            "icon": "fas fa-6",
            "description": "Mention which list to send an email.",
            "datetime": "2024-04-15T16:50:10Z"
        },
        {
            "step_title": "Setup an automation trigger",
            "icon": "fas fa-7",
            "description": "Set the periodic timings of the auto-send.",
            "datetime": "2024-04-15T18:00:10Z"
        },
        {
            "step_title": "Activate the automation",
            "icon": "fas fa-8",
            "action_performed": "Here, you go. Activate it!",
            "datetime": "2024-04-15T20:15:10Z"
        }
    ],
    "x_rays_triggers": [
        {
            "id": "7f887a3b-43aa-4cd5-8422-bc22daa53527",
            "name": "NZT",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Henderson Fletcher"
        },
        {
            "id": "dd7c053b-c9ef-4224-8c13-8a6c74640e83",
            "name": "IST",
            "status": "off",
            "leads_from": "Email",
            "audience_name": "Buck Dixon"
        },
        {
            "id": "999a6cfd-6e57-45c2-af43-95da750659f6",
            "name": "UTC",
            "status": "off",
            "leads_from": "Contact",
            "audience_name": "Clay Hart"
        },
        {
            "id": "a1d3de4f-834f-4bdc-a8ae-c1712c2256a8",
            "name": "NZT",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Kathrine Mullins"
        },
        {
            "id": "e650f297-57cd-43fc-8766-5d7afa0ae51e",
            "name": "PST",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Spence Roberson"
        },
        {
            "id": "bfc69896-eb5c-4ab2-a074-1ed95b014502",
            "name": "UTC",
            "status": "on",
            "leads_from": "All Page",
            "audience_name": "Myra Macias"
        },
        {
            "id": "fcf4f482-aa31-41d7-b6fc-e71299be994e",
            "name": "IST",
            "status": "off",
            "leads_from": "Email",
            "audience_name": "Nash Hayden"
        },
        {
            "id": "e328480d-9abb-42dc-ab4b-c9afaf56a38d",
            "name": "IST",
            "status": "off",
            "leads_from": "Contact",
            "audience_name": "Lori Manning"
        },
        {
            "id": "49112b4c-1899-47e0-a428-5c4aa02b23ab",
            "name": "PST",
            "status": "on",
            "leads_from": "Contact",
            "audience_name": "Paulette Rose"
        },
        {
            "id": "2b48a095-b3eb-4999-9cf9-088c4a135caf",
            "name": "NZT",
            "status": "off",
            "leads_from": "Contact",
            "audience_name": "Fowler Lowery"
        },
        {
            "id": "e8972529-54f6-4b82-8f66-3e66ae0f03b1",
            "name": "NZT",
            "status": "off",
            "leads_from": "All Page",
            "audience_name": "Aguilar Acevedo"
        },
        {
            "id": "c32e8c0f-0ab0-4a7a-90c7-b62dc8db4919",
            "name": "NZT",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Tammy Brock"
        },
        {
            "id": "afbf60b9-fbe1-4a1b-86dc-f007f0fa6941",
            "name": "PST",
            "status": "on",
            "leads_from": "Contact",
            "audience_name": "Sandy Parker"
        },
        {
            "id": "f445cd12-03c5-43c6-8e3d-ec337767af25",
            "name": "IST",
            "status": "off",
            "leads_from": "All Page",
            "audience_name": "Everett Gibbs"
        },
        {
            "id": "f4756194-e759-4285-9afe-029c9a47ff64",
            "name": "PST",
            "status": "off",
            "leads_from": "Email",
            "audience_name": "Annette Armstrong"
        },
        {
            "id": "498b7792-5332-442e-ad18-f22043259ec5",
            "name": "PST",
            "status": "on",
            "leads_from": "All Page",
            "audience_name": "Tessa Clarke"
        },
        {
            "id": "340e704f-0506-4bc1-88d2-7c942c73a21a",
            "name": "IST",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "York Sykes"
        },
        {
            "id": "9981751d-39d5-446e-a768-fac597a5358b",
            "name": "UTC",
            "status": "on",
            "leads_from": "Contact",
            "audience_name": "Johnnie Fowler"
        },
        {
            "id": "75f165f1-ad63-4652-8b08-f24e3307c7c4",
            "name": "NZT",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Beard Ratliff"
        },
        {
            "id": "0e27fbb3-0726-4b77-8195-04f795bc72ff",
            "name": "PST",
            "status": "off",
            "leads_from": "Contact",
            "audience_name": "Francine Barron"
        },
        {
            "id": "0c19cd68-d7d8-4724-9cc9-e48cb18f5400",
            "name": "PST",
            "status": "on",
            "leads_from": "Contact",
            "audience_name": "Chaney Reid"
        },
        {
            "id": "5cc9f63a-c14a-4f1c-b75b-2299782726a4",
            "name": "PST",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Lizzie Vaughan"
        },
        {
            "id": "f0588e96-10c9-4e78-be0c-b1f4fccc8c3b",
            "name": "UTC",
            "status": "on",
            "leads_from": "All Page",
            "audience_name": "Murray Horne"
        },
        {
            "id": "db789495-6093-40a0-96f2-a719ec0bde56",
            "name": "IST",
            "status": "off",
            "leads_from": "Email",
            "audience_name": "Andrea Skinner"
        },
        {
            "id": "40ab8f49-8120-44f6-96a8-ebf592b7ada8",
            "name": "IST",
            "status": "on",
            "leads_from": "All Page",
            "audience_name": "Daugherty Pruitt"
        },
        {
            "id": "4b7e8f2d-551f-41b9-a8c5-54988d35bfbe",
            "name": "PST",
            "status": "off",
            "leads_from": "Contact",
            "audience_name": "Elba Saunders"
        },
        {
            "id": "dbb7106d-f88d-448d-aea6-341839efdc74",
            "name": "IST",
            "status": "on",
            "leads_from": "Contact",
            "audience_name": "Nadia Velez"
        },
        {
            "id": "3e55fe70-2a7b-47d3-8558-e78724a3cae5",
            "name": "IST",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Shelley Hansen"
        },
        {
            "id": "653e9c15-6fac-40a0-896c-7d547ab5a177",
            "name": "NZT",
            "status": "on",
            "leads_from": "Email",
            "audience_name": "Corinne Kaufman"
        },
        {
            "id": "0876cf5a-8529-4f26-90b5-96851cfba601",
            "name": "PST",
            "status": "on",
            "leads_from": "Contact",
            "audience_name": "Monroe Sparks"
        }
    ],
    "inbox_list": [
        {
            "id": "02386490-db2e-4b08-9db6-29086055f404",
            "name": "Lilia Huffman",
            "type": "Inbox",
            "status": "online",
            "description": "reprehenderit culpa ex esse velit exercitation officia deserunt"
        },
        {
            "id": "83a492a5-4406-447d-a9eb-a7d95a14bbeb",
            "name": "Janell Miles",
            "type": "Inbox",
            "status": "online",
            "description": "voluptate in tempor adipisicing fugiat laborum eiusmod cupidatat"
        },
        {
            "id": "1b35e798-e962-4440-8a96-c6c79bc587b2",
            "name": "Walls Jenkins",
            "type": "Inbox",
            "status": "offline",
            "description": "ullamco sunt Lorem nostrud deserunt tempor deserunt ut"
        },
        {
            "id": "c909b2c6-9c40-4d60-8c38-04a9b0612334",
            "name": "Jacobson Burns",
            "type": "Inbox",
            "status": "offline",
            "description": "labore adipisicing enim ullamco tempor in velit amet"
        },
        {
            "id": "68597172-671e-447d-a6da-6b80c9da8592",
            "name": "Elisa Barrett",
            "type": "Inbox",
            "status": "offline",
            "description": "aliquip mollit laborum irure amet quis labore ex"
        },
        {
            "id": "860b8fa4-b5ea-4a70-971d-83ea031d07db",
            "name": "Turner Ferguson",
            "type": "Inbox",
            "status": "online",
            "description": "ullamco officia occaecat consequat ipsum tempor aute irure"
        },
        {
            "id": "440de6ac-606f-4cc5-aa17-1d96a77770f9",
            "name": "Claudine Tucker",
            "type": "Inbox",
            "status": "online",
            "description": "reprehenderit minim mollit voluptate incididunt quis laboris incididunt"
        },
        {
            "id": "b3c5fc38-0544-4e0c-ade9-60b6f24d2b85",
            "name": "Carlene Cardenas",
            "type": "Inbox",
            "status": "offline",
            "description": "nisi officia ea fugiat minim ullamco ullamco voluptate"
        },
        {
            "id": "0a75ab38-3ef6-4682-a0b5-345a4965c8f6",
            "name": "Kayla Chaney",
            "type": "Inbox",
            "status": "online",
            "description": "pariatur aliquip ipsum culpa do nisi commodo eu"
        },
        {
            "id": "a8ea04d4-d8be-4bef-bad5-9155b9199b06",
            "name": "Cross Frank",
            "type": "Inbox",
            "status": "online",
            "description": "consequat Lorem tempor deserunt in incididunt non do"
        },
        {
            "id": "c26fd51f-4eb4-4f77-89b9-ca1bcb8304ee",
            "name": "Donaldson Oconnor",
            "type": "Inbox",
            "status": "offline",
            "description": "minim aliquip dolor non fugiat mollit irure elit"
        },
        {
            "id": "3ff8d32b-7304-4f1d-8403-774a7cce45e8",
            "name": "Waller Pena",
            "type": "Inbox",
            "status": "online",
            "description": "deserunt adipisicing velit anim quis quis ea qui"
        },
        {
            "id": "66936757-54f4-4ced-93b7-224ad2d9c864",
            "name": "Mcbride Wolf",
            "type": "Inbox",
            "status": "online",
            "description": "laborum ad ullamco minim consectetur exercitation nostrud excepteur"
        },
        {
            "id": "8ba09796-238f-44fe-bcd5-5fb1942144c3",
            "name": "Annabelle Harris",
            "type": "Inbox",
            "status": "online",
            "description": "non pariatur laboris sint cillum nostrud excepteur duis"
        },
        {
            "id": "bbbb5832-a3d5-4d9e-a976-23b91c36c97b",
            "name": "Ramirez Franco",
            "type": "Inbox",
            "status": "offline",
            "description": "ea consequat mollit dolor qui occaecat est nostrud"
        },
        {
            "id": "3b9e03d8-981b-4ab2-a6e0-d3baf1486358",
            "name": "Randi Roman",
            "type": "Inbox",
            "status": "online",
            "description": "irure reprehenderit excepteur sint cillum sit cupidatat nostrud"
        },
        {
            "id": "7b458fde-f203-4d4d-847d-7dde4caddd0b",
            "name": "Dunn Flynn",
            "type": "Inbox",
            "status": "offline",
            "description": "nulla minim excepteur elit laborum mollit minim cillum"
        },
        {
            "id": "155fa483-6fa5-49a4-b18c-e1f0cbba6ef2",
            "name": "Rene Lott",
            "type": "Inbox",
            "status": "offline",
            "description": "consectetur excepteur nostrud do eiusmod fugiat officia commodo"
        },
        {
            "id": "0f298da6-9647-44dd-b510-c94841c35e29",
            "name": "Pearlie Barton",
            "type": "Inbox",
            "status": "offline",
            "description": "cillum culpa proident incididunt do voluptate in magna"
        },
        {
            "id": "3d260c94-508e-4597-b513-45a5cc19cf1c",
            "name": "Vilma Lambert",
            "type": "Inbox",
            "status": "online",
            "description": "nisi irure enim nulla quis ipsum officia enim"
        },
        {
            "id": "54c25c7a-4213-4457-9b4b-bc3b0a7c0ee1",
            "name": "Judith Duke",
            "type": "Inbox",
            "status": "online",
            "description": "amet et aute est sit ad esse duis"
        },
        {
            "id": "4191afb2-c3bb-464b-aa2a-c90716ba2656",
            "name": "Yesenia Randolph",
            "type": "Inbox",
            "status": "online",
            "description": "exercitation commodo ad in consectetur labore minim laboris"
        },
        {
            "id": "20cfb03c-89b9-47fa-ab1f-2d2a9240bf7e",
            "name": "Darcy Rivers",
            "type": "Inbox",
            "status": "online",
            "description": "magna mollit Lorem aliquip veniam veniam nostrud nulla"
        },
        {
            "id": "769ef0dd-5c2a-41cf-be70-452556fe1177",
            "name": "Lacey Farrell",
            "type": "Inbox",
            "status": "offline",
            "description": "eu occaecat culpa pariatur est minim exercitation occaecat"
        },
        {
            "id": "0cbd5b8e-b276-4904-8896-7afb724f339f",
            "name": "Dianne Spence",
            "type": "Inbox",
            "status": "online",
            "description": "amet amet adipisicing irure dolor nulla ex ea"
        },
        {
            "id": "5e01a1b9-78f3-4fcb-b77a-4494637213fb",
            "name": "Curry Graham",
            "type": "Inbox",
            "status": "offline",
            "description": "quis proident veniam et amet reprehenderit amet nulla"
        },
        {
            "id": "ccec3f26-d343-4400-bc79-24d51c599d1d",
            "name": "Osborn Foster",
            "type": "Inbox",
            "status": "offline",
            "description": "sint ut voluptate ad mollit in labore proident"
        },
        {
            "id": "d39be905-5726-4967-8543-edf2bba43974",
            "name": "Barber Rivas",
            "type": "Inbox",
            "status": "online",
            "description": "anim incididunt dolore magna commodo ex esse occaecat"
        },
        {
            "id": "339ba782-f901-48c4-affd-f90c9d76106c",
            "name": "Lucinda Henry",
            "type": "Inbox",
            "status": "online",
            "description": "eu culpa esse non cupidatat dolor do duis"
        },
        {
            "id": "19487fcd-84cb-4d7b-af55-70545e223321",
            "name": "Colette Obrien",
            "type": "Inbox",
            "status": "offline",
            "description": "id aliquip ullamco ut dolor incididunt incididunt amet"
        }
    ]
}
  constructor(
    public commonService:CommonService
  ) {
    this.commonService.commonApi().subscribe((data)=>{
      this.holeData=data;
      console.log(this.holeData)
    })
   }
}
