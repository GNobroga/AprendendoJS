

BEGIN TRANSACTION;

    INSERT INTO client (name) VALUES ('Gabriel');
    INSERT INTO client (name) VALUES ('Pedro');
    INSERT INTO client (name) VALUES ('José');
    INSERT INTO client (name) VALUES ('Maria');

COMMIT;



ROLLBACK - Desfaz uma ação antes de executar o commit;


