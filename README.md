#Cài đặt các thư viện

npm i

#Bật server ảo cho Remote Angular,Nó tạo ra file remoteEntry.json và các file JS để Shell có thể tải về.(4201)

ng serve mfe-employee


#Reactjs
#cd vao projects/mfe-dashboard

npm i

#build nó ra js để Angular import (4202)

npm run build

npx http-server dist -p 4202 --cors


#Bật server ảo cho App Shell,Nó sẽ đi lay file cổng 4201 và 4202 về.

ng serve shell
