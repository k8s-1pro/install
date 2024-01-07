FROM kubetm/centos7
RUN yum -y install httpd
RUN yum clean all
RUN systemctl enable httpd.service
RUN yum -y install net-tools
EXPOSE 80
CMD ["/usr/sbin/init"]
