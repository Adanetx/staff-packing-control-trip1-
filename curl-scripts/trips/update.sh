API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "trip": {
      "date": "'"${DATE}"'",
        "location": "'"${LOCATION}"'",
        "destination": "'"${DISTINATION}"'"
     }'

echo
