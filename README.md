# React Responsive Schedule

react-responsive-schedule package is a calendar and note taking tool, you can add it easily and use it with your own data and APIs.

White One;

![Alt text for the image](./assets/images/white.png)

Black One;

![Alt text for the image](./assets/images/black.png)

Note Area;

![Alt text for the image](./assets/images/note.png)

For your suggestions and ideas, you can reach me at this email address __receppek38@gmail.com__

| Name     | Value     | Description     |
|--------------|--------------|--------------|
| monthData | object | You need to send the data on which days there are notes in this field, you can find the data structure you need to send in the examples. |
| onClickAddNote | Function | This function is the function that occurs after clicking the plus icon in the note section. You can get the date of that day with the event parameter. |
| onClickRemoveNote | Function | This function is the function that occurs when clicking the trash can to delete the note on the selected day, and you can get the current day's data with the event parameter and write your function. |
| currentMonthProp | object | Add a state to this field to capture the current month information. |
| setCurrentMonthProps | React.Dispatch | This field is state hook you need to add to get current month information. |