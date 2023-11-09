
##  Getting Started

  
To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run **sphere**.

- Node.js (Version: >=18.x)
- Git
- Prettier VS Code Extension (Recommended Settings, https://www.youtube.com/watch?v=_CntOc4hBcg&t=167s)

## Development

### Setup

1. Clone the repo into your local machine.
   ```bash
	  git clone https://github.com/warrior-pk/sphere.git
   ```

2. Go to the project folder

   ```bash
	  cd sphere
   ```
   
3. Git working branch setup

	 If there is a branch named feature-your_name on github, then just run.
	 ``` bash
		git checkout feature-your_name
	 ```
	If there is a **no** such branch named feature-your_name on repository.
   - Go to dev branch
	   ``` bash
		git checkout dev
	 ```
    - Go to dev branch
	   ``` bash
		git checkout -b feature-your_name 
	  ```

4. Install packages

   ```bash
	  npm install
   ```
   or
   ```bash
	  yarn
   ```

5. Set up your `.env` file

   - Create a `.env.local` file in the root directory
   - Assign environment variables mentioned below with proper values.
	```bash
		NEXT_PUBLIC_apiKey=""
		NEXT_PUBLIC_authDomain=""
		NEXT_PUBLIC_projectId=""
		NEXT_PUBLIC_storageBucket=""
		NEXT_PUBLIC_messagingSenderId=""
		NEXT_PUBLIC_appId=""
		NEXT_PUBLIC_measurementId=""
	```
6. Run the project
  
   ```bash
	  npm run dev
   ```

	or

   ```bash
	  yarn dev
	  ```

Open [http://localhost:3000](http://localhost:3000)

## Contributing
### Pushing changes
1. After feature is implement or bug fixed. It is time to commit and push final changes.
```bash
	git add .
	git commit -m 'your commit message'
	git push -u origin feature-your_name
```
