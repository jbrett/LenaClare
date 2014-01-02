###################################################################
# SET THE BRANCH NAME HERE
###################################################################

server "166.78.249.201", :app, :web, :db, :primary => true

# What is the branch in your Git repository that will be deployed to the server?
set :branch, "dev"

set :site_root, "/var/www/lenaclare/dev"

# What is the directory path used to store your project on the remote server?
set :deploy_to, "#{site_root}/deployments"

# Composer Install
task :composer_install do
	run "cd #{release_path} && php composer.phar -v self-update"
	run "cd #{release_path} && php composer.phar -v update --prefer-source -n"
end

# Before Actions
before "deploy:create_symlink", :composer_install