# Reference for devopsdays-theme

Introductory text goes here.

## Fields in YYYY-CITY.yml
The YYYY-CITY.yml file is the main configuration file for your event. This is what each field does.

### General Fields

| Field Name       | Type   | Required | Description                                                                                                       |
|------------------|--------|----------|-------------------------------------------------------------------------------------------------------------------|
| `name`           | String | Yes      | The name of the event. Four digit year with the city name in lower-case, with no spaces. Example: "2017-chicago". |
| `year`           | String | Yes      | The year of the event. Make sure it is in quotes. Example: "2017".                                                |
| `city`           | String | Yes      | The displayed city name of the event. Capitalize it. Example: "Chicago" or "Salt Lake City".                      |
| `event_twitter`  | String | Yes      | The twitter handle for your event such as "devopsdayschi" or "devopsdaysmsp". Exclude the "@" symbol.             |
| `description`    | String | No       | Overall description of your event. Quotation marks need to be escaped.                                            |
| `ga_tracking_id` | String | No       | If you have your own Google Analytics tracking ID, enter it here. Example: "UA-74738648-1".                       |

### Date-related Fields
All dates are in unquoted YYYY-MM-DD, like this: `variable: 2016-01-05`

| Field Name                | Type       | Required | Description                                                                                                                                                                                                                   |
|---------------------------|------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `startdate`               | YYYY-MM-DD | No       | The start date of your event. Leave blank if you don't have a venue reserved yet.                                                                                                                                             |
| `enddate`                 | YYYY-MM-DD | No       | The end date of your event. Leave blank if you don't have a venue reserved yet.                                                                                                                                               |
| `cfp_date_start`          | YYYY-MM-DD | No       | The date you will start accepting talk proposals. Can be a blank value.                                                                                                                                                       |
| `cfp_date_end`            | YYYY-MM-DD | No       | The date you will close your call for proposals. Can be a blank value.                                                                                                                                                        |
| `cfp_date_announce`       | YYYY-MM-DD | No       | The date you will inform proposers of status. Can be a blank value.                                                                                                                                                           |
| `cfp_open`                | String     | No       | Either "true" or "false". Can be blank. This controls whether or not the "propose" button shows on your event page. *Deprecated field; if you have set `cfp_date_start` and `cfp_date_end` they will serve the same purpose.* |
| `cfp_link`                | String     | No       | If you have a custom link for submitting proposals, add it here. This will control the Propose menu item as well as the "Propose" button.                                                                                     |
| `registration_date_start` | YYYY-MM-DD | No       | The date you will start accepting registration. Can be a blank value.                                                                                                                                                         |
| `registration_date_end`   | YYYY-MM-DD | No       | The date you will close registration. Can be a blank value.                                                                                                                                                                   |
| `registration_closed`     | String     | No       | Set this to "true" if you need to manually close registration before your registration end date.                                                                                                                              |
| `registration_link`       | String     | No       | If you have a custom registration link, enter it here. This will control the Registration menu item as well as the "Register" button.                                                                                         |

### Branding Fields

| Field Name   | Type   | Required | Description                                                                                                              |
|--------------|--------|----------|--------------------------------------------------------------------------------------------------------------------------|
| `event_logo` | String | No       | The filename of your event's logo, relative to `static/events/YYYY-CITY/`. JPEG format is preferred. Example: "logo.jpg" |

### Location Fields

| Field Name         | Type   | Required | Description                                                                                                                                     |
|--------------------|--------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `coordinates`      | String | Yes      | The coordinates of your city. [Get Latitude and Longitude of a Point](http://itouchmap.com/latlong.html). Required to display event on the map. |
| `location`         | String | Yes      | The generator scripts will default to the value of `City`, but you can make it the venue name. Example: "Chicago Mart West"                     |
| `location_address` | String | Yes      | Use the street address of your venue. This will show up on the welcome page if set. Example: "350 West Mart Center Drive, Chicago, IL 60654"    |

### Navigation Fields
These fields are used to control the navigation elements (menu) of your event's page. The syntax for navigation is thus:

```
nav_elements:
  - name: propose
  - name: location
  - name: registration
  - name: program
  - name: speakers
  - name: sponsor
  - name: contact
  - name: conduct
```

If you would like to add a custom/additional navigation to your menu, add another element where you would like it to appear. You will also need to provide the target for the link if it not relative to your event, as so:

```
nav_elements
  - name: propose
  - name: volunteer
  - name: party
    url: http://www.google.com
```
The above example would create a new menu item called "Volunteer" which linked to `devopsdays/events/YYYY-CITY/volunteer`, and another menu item called "party" which would link to `http://www.google.com`

The menu items also take an optional parameter of `icon` where you can set the font-awesome icon that will display on small screens. Choose at http://fontawesome.io/icons/. Example:

```
nav_elements
  - name: example
    icon: "map-o"
```

### Organizer Fields

Remember, the organizers listed are are the same people you have on the mailing list and Slack channel.

```
team_members:
  - name: "John Doe"
  - name: "Jane Smith"
    twitter: "devopsdays"
  - name: "Sally Fields"
    employer: "Acme Anvil Co."
    github: "devopsdays"
    facebook: "https://www.facebook.com/sally.fields"
    linkedin: "https://www.linkedin.com/in/sallyfields"
    website: "https://mattstratton.com"
    image: "sally-fields.jpg"
    bio: "Thought leader paradigm affordances physical computing quantitative vs. qualitative disrupt thought leader disrupt. Venture capital Steve Jobs pitch deck moleskine sticky note agile Steve Jobs pivot disrupt grok driven. Human-centered design bootstrapping agile driven grok food-truck ship it long shadow."
```
The only required field for an organizer is the "name" field, but it is highly recommended to populate the image and the bio. Markdown is supported in the `bio` field. Quotation marks must be escaped.

`organizer_email:` - Organizer email address. String. Required.
`proposal_email:` Proposal email address. String. Required.

### Sponsor fields

The list of sponsors looks like this:
```
sponsors:
  - id: samplesponsorname
    level: gold
    url: http://mysponsor.com/?campaign=me   
  - id: arresteddevops
    level: community
```

The optional `url` parameter allows for overriding the default URL for that sponsor.

`sponsors_accepted:` - String. Set to "yes" if you want "Become a XXX Sponsor!" link

#### Sponsor Levels

In this section, list the level of sponsorships and the label to use.
You may optionally include a "max" attribute to limit the number of sponsors per level. For
unlimited sponsors, omit the max attribute or set it to 0. If you want to prevent all
sponsorship for a specific level, it is best to remove the level.

```
sponsor_levels:
  - id: gold
    label: Gold
    max: 10
  - id: silver
    label: Silver
    max: 0 # This is the same as omitting the max limit.
  - id: bronze
    label: Bronze
  - id: community
    label: Community
```
