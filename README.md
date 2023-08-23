// Add search engine or to elastic search instead of DB queries

Setup:

1. npm install
2. Install nodeJS backend, and run
3. Npm run start

Improvements:

1. Better UX by far
2. Add performance improvements
   a. Split components out better so only the necessary parts of the tree are updating
   b. debounce is currently causing a rerender, can be fixed
   c. Consider global state, but in this usecase might cause more harm
3. Add Authentication (example usecase: If there is more information on the Kit and any data is sensitive, we could ask them to login after finding their kit)
4. Add Logging
5. Add Ids to all buttons and items that will be integration testing
6. Add Unit tests
7. Add themeing (could use styled components but that is slwoer than css modules, sass, etc);
8. Make this search embeddable maybe? Maybe to make it easier for customers allow them to embedde this as a snippet (Not iframe); If this was something that we did, you would then also want to split the data by tenant so faster query time.
9. Need to handle Ddos potential, and how to limit & block ips
