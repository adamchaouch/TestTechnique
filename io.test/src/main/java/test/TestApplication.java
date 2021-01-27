package test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;


@SpringBootApplication
public class TestApplication  implements   CommandLineRunner{


    public static void main(String[] args) {
        SpringApplication.run(TestApplication.class, args);
    }



    @Override
    public void run(String... args) throws Exception {
        //numberService.divisibilitychecker(10);
        System.out.println("runner ....");
    }
}

