# serverless-firebase-rules
A serverless plugin for deploying new firebase rules alongside your service


# Quickstart

Install

```npm install --save serverless-firebase-rules```

Generate firebase login token (requires https://github.com/firebase/firebase-tools package)

```firebase login:ci```

Create file in project root called `firebase.json` which is formatted like firebase rules in the dashboard

```
{
	"database": {
		"rules": {
			".read": "false",
			".write": "false"
		}
	}
}
```

Add to serverless.yml

```
custom:
  firebase:
    token:  YOUR_TOKEN
    project: YOUR_PROJECT_ID
```

```
plugins:
  - serverless-firebase-rules
```

Deploy your project and rules!
```sls deploy```
 
