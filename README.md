#Cài đặt các thư viện

npm i

#Bật server ảo cho Remote Angular,Nó tạo ra file remoteEntry.json và các file JS để Shell có thể tải về.

ng serve mfe-employee

#Bật server ảo cho App Shell,Nó sẽ đi lay file cổng 4201 và 4202 về.

ng serve shell

#Reactjs
#cd vao projects/mfe-dashboard

npm i

#build nó ra js để Angular import

npm run build

npx http-server dist -p 4202 --cors
