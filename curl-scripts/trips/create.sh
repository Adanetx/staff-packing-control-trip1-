API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "trip": {
      "date": "'"${DATE}"'",
     "driverName": "'"${DRIVERNAME}"'",
    "location": "'"${LOCATION}"'",
    "destination": "'"${DESTINATION}"'"
    }
  }'

echo
