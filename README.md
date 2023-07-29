# API Endpoints Documentation

## Patient

**GET All Patients**
```
GET https://bewildered-sweater-hen.cyclic.app/api/patients
```
Retrieves a list of all patients.

**GET Patient by ID**
```
GET https://bewildered-sweater-hen.cyclic.app/api/patients/:id
```
Retrieves a specific patient using their unique ID.

**POST New Patient**
```
POST https://bewildered-sweater-hen.cyclic.app/api/patients
```
Creates a new patient record. The request body should contain patient data.

**PUT Update Patient**
```
PUT https://bewildered-sweater-hen.cyclic.app/api/patients/:id
```
Updates an existing patient record with the provided ID. The request body should contain updated patient data.

**DELETE Patient**
```
DELETE https://bewildered-sweater-hen.cyclic.app/api/patients/:id
```
Deletes a patient with the specified ID.

## Studies

**GET All Studies**
```
GET https://bewildered-sweater-hen.cyclic.app/api/studies
```
Retrieves a list of all studies.

**GET Study by ID**
```
GET https://bewildered-sweater-hen.cyclic.app/api/studies/:id
```
Retrieves a specific study using its unique ID.

**POST New Study**
```
POST https://bewildered-sweater-hen.cyclic.app/api/studies
```
Creates a new study. The request body should contain study data.

**PUT Update Study**
```
PUT https://bewildered-sweater-hen.cyclic.app/api/studies/:id
```
Updates an existing study with the provided ID. The request body should contain updated study data.

**DELETE Study**
```
DELETE https://bewildered-sweater-hen.cyclic.app/api/studies/:id
```
Deletes a study with the specified ID.

## Series

**GET All Series**
```
GET https://bewildered-sweater-hen.cyclic.app/api/series
```
Retrieves a list of all series.

**GET Series by ID**
```
GET https://bewildered-sweater-hen.cyclic.app/api/series/:id
```
Retrieves a specific series using its unique ID.

**POST New Series**
```
POST https://bewildered-sweater-hen.cyclic.app/api/series
```
Creates a new series. The request body should contain series data.

**PUT Update Series**
```
PUT https://bewildered-sweater-hen.cyclic.app/api/series/:id
```
Updates an existing series with the provided ID. The request body should contain updated series data.

**DELETE Series**
```
DELETE https://bewildered-sweater-hen.cyclic.app/api/series/:id
```
Deletes a series with the specified ID.

## Images

**GET All Images**
```
GET https://bewildered-sweater-hen.cyclic.app/api/images
```
Retrieves a list of all images.

**GET Image by ID**
```
GET https://bewildered-sweater-hen.cyclic.app/api/images/:id
```
Retrieves a specific image using its unique ID.

**POST New Image (with images/files)**
```
POST https://bewildered-sweater-hen.cyclic.app/api/upload
```
Uploads a new image file. The request should include the image data.

**PUT Update Image**
```
PUT https://bewildered-sweater-hen.cyclic.app/api/images/:id
```
Updates an existing image with the provided ID. The request body should contain updated image data.

**DELETE Image**
```
DELETE https://bewildered-sweater-hen.cyclic.app/api/images/:id
```
Deletes an image with the specified ID.

