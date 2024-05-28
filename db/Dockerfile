FROM library/postgres:13
RUN apt-get update
RUN apt-get install -y nano
ENV POSTGRES_USER farms
ENV POSTGRES_PASSWORD farms
ENV POSTGRES_DB farms
COPY ./createTables.sql /docker-entrypoint-initdb.d/
WORKDIR /docker-entrypoint-initdb.d

# https://wkrzywiec.medium.com/how-to-run-database-backend-and-frontend-in-a-single-click-with-docker-compose-4bcda66f6de
# docker ps
# docker logs <container-name>
# docker-compose up -d --force-recreate
# docker-compose down --rmi all