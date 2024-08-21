mkdir https
mkcert -install
mkcert -key-file ./https/localhost-key.pem -cert-file ./https/localhost.pem localhost 127.0.0.1 ::1