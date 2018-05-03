cd /C/Users/spatu/Source/Repos/Frontpages

git pull 

file=( $(cut -d ',' -f1 sources.csv ) )
url=( $(cut -d ',' -f2 sources.csv ) )

for ((i=0; i<${#file[@]}; i++));
do
	rm -f ./img/${file[i]}	
done

for ((i=0; i<${#file[@]}; i++))
do
	pageres ${url[i]} 1200x1200 --crop --filename=./img/temp
	mv ./img/temp.png ./img/${file[i]}
done

git add .
git commit -m "scheduled refresh of front page images"
git push

